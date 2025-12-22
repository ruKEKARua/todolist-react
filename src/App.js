import React, { useEffect, useState } from 'react';
import './styles/App.css';

import { TodoList } from './components/TodoList';
import { Modal } from './components/Modal';
import { Button } from './UI/Buttons/Buttons';

import buttonStyle from '../src/UI/Buttons/Buttons.module.css'
import { Theme } from './components/Theme';
import axios from 'axios';
import { Loading } from './components/Loading';

function App() {
    
    let localStorageArray = []
    
    Object.keys(localStorage).forEach((element) => {

        const storageSplit = localStorage[element].split(',')

        const title = storageSplit.shift();

        localStorageArray.push({id: element, title: title, body: storageSplit.join()});

    });

    const [tasks, setTasks] = useState(localStorageArray);

    const [isModalHidden, setModalHidden] = useState(false);

    const [isLoading, setLoading] = useState(false);
    
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

    }, [])
    
    const fetchPosts = () => {

        setLoading(true)
        
        setTimeout(() => {
            
            axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
            
                setTasks(response.data)
            
            })
            .catch(error => {
              console.error('Failed to fetch posts:', error)
            })
    
            setLoading(false)
            
        }, 2500);



    }





    return (
        <div className="App">
    
            <header>

                <h1>TodoList</h1>

                <Theme/>
            
            </header>

            <main>
                

                <Button title={'Add New Task'} className={buttonStyle.ButtonNewTask} func={modalOpen}/>


                <Modal createNewTask={createNewTask} className={`${'modal'} ${isModalHidden ? '' : 'hidden'}`} closeModal={closeModal}/>

                {

                    isLoading 
                    ?
                    <Loading />:  
                    <TodoList taskList={tasks} removeTask={removeTask} />
                    /*localStorageArray.length == 0 ? <Paragrath title={'List is Empty'} className={paragrathStyle.empty} /> : <TodoList taskList={tasks} removeTask={removeTask} />*/
                }

            </main>

        </div>
    );
}

export default App;
