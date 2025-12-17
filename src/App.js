import React, { useState } from 'react';
import './styles/App.css';

import { TodoList } from './components/TodoList';
import { Modal } from './components/Modal';
import { Paragrath } from './UI/Paragrath/Paragrath';
import { Button } from './UI/Buttons/Buttons';

import paragrathStyle from '../src/UI/Paragrath/Paragrath.module.css'
import buttonStyle from '../src/UI/Buttons/Buttons.module.css'

function App() {
    
    const localStorageArray = []
    
    Object.keys(localStorage).forEach((element) => {

        const storageSplit = localStorage[element].split(',')

        const title = storageSplit.shift();

        localStorageArray.push({id: element, title: title, body: storageSplit.join()});

    });

    const [tasks, setTasks] = useState(localStorageArray);

    const [isModalHidden, setModalHidden] = useState(false);
    

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

    return (
        <div className="App">
    
            <header><h1>TodoList</h1></header>

            <main>

                <Button title={'Add New Task'} className={buttonStyle.ButtonNewTask} func={modalOpen}/>

                <Modal createNewTask={createNewTask} className={`${'modal'} ${isModalHidden ? '' : 'hidden'}`} closeModal={closeModal}/>

                {localStorageArray.length == 0 ? <Paragrath title={'List is Empty'} className={paragrathStyle.empty} /> : <TodoList taskList={tasks} removeTask={removeTask} />}



            </main>

        </div>
    );
}

export default App;
