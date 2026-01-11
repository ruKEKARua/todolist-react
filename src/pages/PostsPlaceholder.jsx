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
import { Pagitanion } from '../components/Pagination';


function PostsPlaceholder() {


    const [tasks, setTasks] = useState([{
        id: 1,
        title: 'test',
        body: 'test'
    }]);
    const [isModalHidden, setModalHidden] = useState(false);
    
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    let [page, setPage] = useState(1);
    
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

    const updateTask = (updatedTask) => {
        setTasks(tasks.map(task => 
            task.id === updatedTask.id ? updatedTask : task
        ));
    }

    const changePagePlus = () => {


        if (page != totalPages) {

            setPage(page + 1)

        } else if (page >= totalPages) {}

    }
    
    const changePageMinus = () => {

        if (page > 1) {

            setPage(page - 1)

        } else if (page <= 1) {}

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

                {
                    postError && <h1>Произошла ошибка ${postError}</h1>
                }
                
                    { 
                    
                        totalPages !== 0 ? 
                        
                        <Pagitanion 
    
                            setPage={setPage} 
                            pagesArray={pagesArray} 
                            page={page} 
                            changePagePlus={changePagePlus} 
                            changePageMinus={changePageMinus}/>
                        : <></>
                    }

                {
                    
                    
                    isPostLoading 
                    ?
                    <Loading /> : (
                        <>
                            <TodoList 

                                taskList={tasks}
                                removeTask={removeTask}
                                createNewTask={createNewTask}
                                updateTask={'zero'}
                               />

                        </>
                    )
                    
                    
                }

                { 
                    
                    totalPages !== 0 ? 
                    
                    <Pagitanion 
    
                        setPage={setPage} 
                        pagesArray={pagesArray} 
                        page={page} 
                        changePagePlus={changePagePlus} 
                        changePageMinus={changePageMinus}/>
                    : <></>
                }

            </main>

        </div>
    );
}

export default PostsPlaceholder;
