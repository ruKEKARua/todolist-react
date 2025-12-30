import React, { useEffect, useState } from 'react';

import { TodoList } from '../components/TodoList';
import { Modal } from '../components/Modal';
import { Button } from '../UI/Buttons/Buttons';

import buttonStyle from '../UI/Buttons/Buttons.module.css'
import { Theme } from '../components/Theme';
import { Loading } from '../components/Loading';
import PostService from '../hooks/PostService';
import { useFecthing } from '../hooks/useFetching';
import { getPagesArray, getPagesCount } from '../utils/pages';

function Posts() {
    
    let localStorageArray = []
    
    Object.keys(localStorage).forEach((element) => {

        const storageSplit = localStorage[element].split(',')

        const title = storageSplit.shift();

        localStorageArray.push({id: element, title: title, body: storageSplit.join()});

    });

    const [tasks, setTasks] = useState(localStorageArray);

    const [isModalHidden, setModalHidden] = useState(false);
    
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    
    let pagesArray = getPagesArray(totalPages);
    
    const [fetchPosts, isPostLoading, postError] = useFecthing(async () => {
        
        const jsonData = await PostService.getAll(limit, page);
        
        setTasks(jsonData.data)
        
        const totalCount = jsonData.headers['x-total-count'];
        
        
        setTotalPages(getPagesCount(totalCount, limit))
        
    })

    
    
    const createNewTask = (newTask) => {
        
        setTasks([...tasks, newTask])

        localStorage.setItem(newTask.id, [newTask.title, newTask.body])
        
    }

    const removeTask = (task) => {

        setTasks(tasks.filter(p => p.id !== task.id))
        localStorage.removeItem(task.id)

    }

    const modalOpen = () => {

        setModalHidden(!isModalHidden);

    }

    const closeModal = () => {

        setModalHidden(!isModalHidden);

    }
    
    useEffect(() => {

       fetchPosts()

    }, [page])

    return (
        <div className="App">
    
            <header>

                <h1>TodoList</h1>

                <Theme/>
            
            </header>

            <main>
                

                <Button title={'Add New Task'} className={buttonStyle.ButtonNewTask} func={modalOpen}/>

                <div style={{display: 'flex', justifyContent: 'center', gap: '20px', width: '100%', height: '50px', margin: '30px auto 0 auto'}}>

                    {
                        pagesArray.map((element) => {
                        
                            return <Button title={element} func={() => setPage(element)} className={ page === element ? `${buttonStyle.page_current} ${buttonStyle.page}` : `${buttonStyle.page}`} key={element}/>
                        
                        })
                    }

                </div> 
                

                <Modal createNewTask={createNewTask} className={`${'modal'} ${isModalHidden ? '' : 'hidden'}`} closeModal={closeModal}/>

                {
                    postError && <h1>Произошла ошибка ${postError}</h1>
                }

                {

                    isPostLoading 
                    ?
                    <Loading />:  
                    <TodoList taskList={tasks} removeTask={removeTask} />
                    /*localStorageArray.length == 0 ? <Paragrath title={'List is Empty'} className={paragrathStyle.empty} /> : <TodoList taskList={tasks} removeTask={removeTask} />*/
                }

            </main>

        </div>
    );
}

export default Posts;
