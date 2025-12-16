import React, { useState } from 'react';
import './styles/App.css';

import { TodoList } from './components/TodoList';
import { Inputs } from './components/Inputs';
import { Paragrath } from './UI/Paragrath/Paragrath';

import paragrathStyle from '../src/UI/Paragrath/Paragrath.module.css'

function App() {

    
    const localStorageArray = []
    
    Object.keys(localStorage).forEach((element) => {

        const titleAndBodySplit = localStorage[element].split(',')
        
        localStorageArray.push({id: element, title: titleAndBodySplit[0], body: titleAndBodySplit[1]});

    });

    const [tasks, setTasks] = useState(localStorageArray)
    
    const createNewTask = (newTask) => {
        
        setTasks([...tasks, newTask])

        localStorage.setItem(newTask.id, [newTask.title, newTask.body])
        
    }

    const removeTask = (task) => {

        
        setTasks(tasks.filter(p => p.id !== task.id))
        localStorage.removeItem(task.id)

    }

    return (
        <div className="App">
    
            <header><h1>TodoList</h1></header>

            <main>

                <Inputs createNewTask={createNewTask}/>

                {localStorageArray.length == 0 ? <Paragrath title={'List is Empty'} className={paragrathStyle.empty} /> : <TodoList taskList={tasks} removeTask={removeTask}/>}



            </main>

        </div>
    );
}

export default App;
