import React, { useState } from 'react'
import { Input } from '../UI/Inputs/Input'
import { Button } from '../UI/Buttons/Buttons'
import buttonStyle from '../UI/Buttons/Buttons.module.css'


export const Inputs = ({createNewTask}) =>{

    const [todo, setTodo] = useState({title: '', body: ''})

    const addNewTask = (event) => {

        event.preventDefault();

        const newTask = {...todo, id: Date.now()};

        createNewTask(newTask)

    }

    return (
        
        <form className='inputs'>

            <h2>Add New Task</h2>

            <Input 
                value={todo.title} 
                name={'Title'} 
                onChange={event => setTodo({...todo ,title: event.target.value})}
            />

            <Input 
                value={todo.body} 
                name={'Description'} 
                onChange={event => setTodo({...todo, body: event.target.value})}
            />

            <Button title={'Confirm'} className={buttonStyle.ButtonAdd} func={addNewTask}/>

        </form>
    )

}
