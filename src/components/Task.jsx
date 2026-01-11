import React, { useState } from 'react'
import { Paragrath } from '../UI/Paragrath/Paragrath'
import { Button } from '../UI/Buttons/Buttons'
import { Textarea } from '../UI/Textareas/Textarea'

import paragrathStyle from '../UI/Paragrath/Paragrath.module.css'
import buttonStyle from '../UI/Buttons/Buttons.module.css'
import textareaStyle from '../UI/Textareas/Textarea.module.css'
import inputsStyle from '../UI/Inputs/Input.module.css'


export const Task = ({title, body, task, removeTask, id, updateTask}) =>{

    const [titleElement, setTitleElement] = useState('Paragrath');
    const [bodyElement, setBodyElement] = useState('Paragrath');

    const [buttonName, setButtonName] = useState('Change');

    const [titleArea, setTitleArea] = useState(title);
    const [bodyArea, setBodyArea] = useState(body);

    const test = () => {

        setTitleElement('Textarea')
        setBodyElement('Textarea')
    
        setButtonName('Confirm')

    }

    const test2 = () => {

        const updatedTask = {
                id: id, // тот же ID
                title: titleArea,
                body: bodyArea
            };
        
        // Вместо удаления и создания новой задачи - обновите существующую
        // Удалите старую запись из localStorage
        localStorage.removeItem(id);
        
        // Добавьте обновленную запись
        localStorage.setItem(updatedTask.id, [updatedTask.title, updatedTask.body]);
        
        // Вызовите функцию обновления задачи в родительском компоненте
        updateTask(updatedTask);
        
        setTitleElement('Paragrath')
        setBodyElement('Paragrath')
        
        setButtonName('Change')
        
    }

    const deleteTask = () => {

        removeTask(task)

    }


    return (
        
        <div className='task' key={id}>

            <div className='delete_button_block'> 

                {
                    updateTask === 'zero' ? <></> : (
                        buttonName === 'Change' ? <Button title={'Change'} className={buttonStyle.ButtonChange} func={test} /> 
                        : <Button title={'Confirm'} className={buttonStyle.ButtonChange} func={test2} />
                    )
                }

                
                <Button title={'Delete'} className={buttonStyle.ButtonDelete} func={deleteTask} />

            </div>

            <div className='task_main_block'>

                {
                    titleElement === 'Paragrath' ? <Paragrath title={title} className={paragrathStyle.title} /> 
                    : <Textarea className={`${inputsStyle.change_title}`} value={titleArea} onChange={event => {setTitleArea(event.target.value)}} />
                }
                {
                    bodyElement === 'Paragrath' ? <Paragrath title={body} className={paragrathStyle.body} /> 
                    : <Textarea className={`${inputsStyle.change_body}`} value={bodyArea} onChange={event => {setBodyArea(event.target.value)}} />
                }

            </div>

        </div>

    )

}
