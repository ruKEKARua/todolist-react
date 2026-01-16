import React, { useState } from 'react'
import { Paragrath } from '../UI/Paragrath/Paragrath'
import { Button } from '../UI/Buttons/Buttons'
import { Textarea } from '../UI/Textareas/Textarea'

import paragrathStyle from '../UI/Paragrath/Paragrath.module.css'
import buttonStyle from '../UI/Buttons/Buttons.module.css'
import inputsStyle from '../UI/Inputs/Input.module.css'

import { filter, updateTaskDispatch } from '../store/localstorageSlicer';
import { useDispatch } from 'react-redux'
import Checkbox from '../UI/Checkbox/Checkbox'
import Img from '../UI/Img/Img'

import goodImage from '../UI/Images/good.png'


export const Task = ({title, body, task, id, isFinish}) =>{

    const dispatch = useDispatch()

    const [titleElement, setTitleElement] = useState('Paragrath');
    const [bodyElement, setBodyElement] = useState('Paragrath');

    const [buttonName, setButtonName] = useState('Change');

    const [titleArea, setTitleArea] = useState(title);
    const [bodyArea, setBodyArea] = useState(body);

    const [isFinishState, setIsFinish] = useState(isFinish);

    const test = () => {

        setTitleElement('Textarea')
        setBodyElement('Textarea')
    
        setButtonName('Confirm')

    }

    const test2 = () => {

        const updatedTask = {
                id: id,
                title: titleArea,
                body: bodyArea,
                isFinish: isFinishState
            };

        localStorage.removeItem(id);
        
        localStorage.setItem(updatedTask.id, JSON.stringify(updatedTask));
       
        dispatch(updateTaskDispatch(updatedTask));
        
        setTitleElement('Paragrath')
        setBodyElement('Paragrath')
        
        setButtonName('Change')
        
    }

    const removeTask = () => {

        dispatch(filter(task))
        localStorage.removeItem(task.id)

    }

    const changeIsFinished = () => {

        setIsFinish(!isFinishState)

    }

    return (
        
        <div className='task' key={id}>

            <div className='buttons_block'> 

                {
                    buttonName === 'Change' ? <Button title={'Change'} className={buttonStyle.ButtonChange} func={test} /> 
                    : <Button title={'Confirm'} className={buttonStyle.ButtonChange} func={test2} />
                }


                {

                    buttonName === 'Change' ? 
                        <div className='checkbox_wrapper'>
                            <div className='finish_title'>
                                <Paragrath title={`${isFinishState ? 'Выполнена' : 'Не выполнена'}`} className={'checkBox'}/>
                            </div>
                            {isFinishState ? <Img path={goodImage} alt={'фото не выолненной задачи'}/> : <></>}

                        </div>
                    :
                        <div className='checkbox_wrapper'>
                            <Checkbox checked={isFinishState} onChange={changeIsFinished} />
                            <div className='finish_title'>
                                <Paragrath title={`${isFinishState ? 'Выполнена' : 'Не выполнена'}`} className={'checkBox'}/>
                            </div>
                            {isFinishState ? <Img path={goodImage} alt={'фото не выолненной задачи'}/> : <></>}
                        </div>
                        

                }
                
                
                
                <Button title={'Delete'} className={buttonStyle.ButtonDelete} func={removeTask} />

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
