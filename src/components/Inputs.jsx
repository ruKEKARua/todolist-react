import React, { useState } from 'react'
import { Input } from '../UI/Inputs/Input'
import { Button } from '../UI/Buttons/Buttons'
import { Paragrath } from '../UI/Paragrath/Paragrath'
import buttonStyle from '../UI/Buttons/Buttons.module.css'
import paragrathStyle from '../UI/Paragrath/Paragrath.module.css'
import inputsStyle from '../UI/Inputs/Input.module.css'
import { Textarea } from '../UI/Textareas/Textarea'
import textareaStyle from '../UI/Textareas/Textarea.module.css'

import { drawTask } from '../store/localstorageSlicer';
import { useDispatch } from 'react-redux'
import { setModalHidden } from '../store/modalSlice'


export const Inputs = () =>{

    const dispatch = useDispatch()

    const [todo, setTodo] = useState({title: '', body: '', isFinish: false});
    
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
        createNewTask(newTask);
        setTodo({title: '', body: ''});
        closeModal();

    }

    const createNewTask = (newTask) => {
        
        dispatch(drawTask(newTask))
        
        const id = newTask.id;
        
        localStorage.setItem(id, JSON.stringify(newTask))
        
    }

    const closeModal = () => {

        dispatch(setModalHidden());

    }

    return (
        
        <form className='inputs'>

            <div className='input_block'>

                <Input 
                    value={todo.title} 
                    name={'Title'} 
                    onChange={event => {setTodo({...todo, title: event.target.value}); toogleClass('changeTitleWhileInput')}}
                    className={inputsStyle.InputTitle}
                />
                <Paragrath className={`${paragrathStyle.requiredValue} ${titleIsActive ? '' : paragrathStyle.hidden}`} title={'Это поле обязательно'}/>

            </div>
           

            <div className='input_block'>
                <Textarea 
                    value={todo.body} 
                    onChange={event => {setTodo({...todo, body: event.target.value}); toogleClass('changeBodyWhileInput')}}
                    className={`${inputsStyle.InputBody} ${textareaStyle.body}`}
                />
                <Paragrath className={`${paragrathStyle.requiredValue} ${bodyIsActive ? '' : paragrathStyle.hidden}`} title={'Это поле обязательно'}/>
            </div>

            <Button title={'Confirm'} className={buttonStyle.ButtonAdd} func={addNewTask}/>

        </form>
    )

}
