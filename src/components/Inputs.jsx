import React, { useState } from 'react'
import { Input } from '../UI/Inputs/Input'
import { Button } from '../UI/Buttons/Buttons'
import { Paragrath } from '../UI/Paragrath/Paragrath'
import buttonStyle from '../UI/Buttons/Buttons.module.css'
import paragrathStyle from '../UI/Paragrath/Paragrath.module.css'


export const Inputs = ({createNewTask}) =>{

    const [todo, setTodo] = useState({title: '', body: ''});
    
    let [titleIsActive, titleSetIsActive] = useState(false);
    let [bodyIsActive, bodySetIsActive] = useState(false);

    const toogleClass = (value) => {

        switch (value) {
            case 'title':
                titleIsActive = true;
                titleSetIsActive(titleIsActive);
                break;
            case 'body':
                bodyIsActive = true;
                bodySetIsActive(bodyIsActive);
                break;
            case 'both':
                titleIsActive = true;
                bodyIsActive = true;
                titleSetIsActive(titleIsActive);
                bodySetIsActive(bodyIsActive);
                break;
            case 'changeTitleWhileInput':
                titleIsActive = false;
                titleSetIsActive(titleIsActive);
                break;
            case 'changeBodyWhileInput':
                bodyIsActive = false;
                bodySetIsActive(bodyIsActive);
                break;
            default:
                break;
        }

    }

    const addNewTask = (event) => {

        event.preventDefault();

        if (todo.title == '' && todo.body == '') {
            return toogleClass('both')
        }
        if (todo.title == '') {
            return toogleClass('title')
        }
        if (todo.body == '') {
            return toogleClass('body')
        }

        const newTask = {...todo, id: Date.now()};
        createNewTask(newTask)
        setTodo({title: '', body: ''})

    }

    return (
        
        <form className='inputs'>

            <h2>Add New Task</h2>

            <div>

                <Input 
                    value={todo.title} 
                    name={'Title'} 
                    onChange={event => {setTodo({...todo, title: event.target.value}); toogleClass('changeTitleWhileInput')}}
                />
                <Paragrath className={`${paragrathStyle.requiredValue} ${titleIsActive ? '' : paragrathStyle.hidden}`} title={'Это поле обязательно'}/>

            </div>
           

            <div>
                <Input 
                    value={todo.body} 
                    name={'Description'} 
                    onChange={event => {setTodo({...todo, body: event.target.value}); toogleClass('changeBodyWhileInput')}}
                />
                <Paragrath className={`${paragrathStyle.requiredValue} ${bodyIsActive ? '' : paragrathStyle.hidden}`} title={'Это поле обязательно'}/>
            </div>

            <Button title={'Confirm'} className={buttonStyle.ButtonAdd} func={addNewTask}/>

        </form>
    )

}
