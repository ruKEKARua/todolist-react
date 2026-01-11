import React, { useEffect, useState } from 'react';

import { TodoList } from '../components/TodoList';
import { Modal } from '../components/Modal';
import { Button } from '../UI/Buttons/Buttons';

import buttonStyle from '../UI/Buttons/Buttons.module.css'
import { Theme } from '../components/Theme';
import { Loading } from '../components/Loading';

import { Pagitanion } from '../components/Pagination';

function Posts() {
    
    let localStorageArray = []
    
    
    const [tasks, setTasks] = useState(localStorageArray);
    const [isModalHidden, setModalHidden] = useState(false);
    
    Object.keys(localStorage).forEach((element) => {

        const id = element;
        const parse = JSON.parse(localStorage[element]);
        const title = parse.title;
        const body = parse.body;

        const newTask = {id: id, title: title, body: body}

        localStorageArray.push({id: id, title: title, body:body})


    });
    
    const createNewTask = (newTask) => {
        
        setTasks([...tasks, newTask])

        const id = newTask.id;

        localStorage.setItem(id, JSON.stringify(newTask))
        
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

    const modalOpen = () => {

        setModalHidden(!isModalHidden);

    }

    const closeModal = () => {

        setModalHidden(!isModalHidden);

    }


    return (
        <div className="App">
    
            <header>

                <h1>TodoList</h1>

                <Theme/>

                <div className='new_task_wrapper'>
                
                    <Button 

                        title={'Add New Task'} 
                        className={buttonStyle.ButtonNewTask} 
                        func={modalOpen}/>
                
                </div>

            </header>

            <main>
                

                <Modal 

                    createNewTask={createNewTask} 
                    className={`${'modal'} ${isModalHidden ? '' : 'hidden'}`} 
                    closeModal={closeModal}/>

                <TodoList 

                    taskList={tasks} 
                    removeTask={removeTask} 
                    createNewTask={createNewTask}
                    updateTask={updateTask}
                   />

            </main>

        </div>
    );
}

export default Posts;
