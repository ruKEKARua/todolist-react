import React, { useEffect, useRef, useState } from 'react';

import { TodoList } from '../components/TodoList';
import { Modal } from '../components/Modal';
import { Button } from '../UI/Buttons/Buttons';

import buttonStyle from '../UI/Buttons/Buttons.module.css'
import { Theme } from '../components/Theme';

import { useSelector, useDispatch } from 'react-redux'
import { drawTask } from '../store/localstorageSlicer';
import { setModalHidden } from '../store/modalSlice';


function Posts() {
    
    const localstorageTasks = useSelector((state) => state.listStorage.value);
    const isModalHidden = useSelector((state) => state.modal.value);
    
    const dispatch = useDispatch()
    
    const hasRun = useRef(false);

    useEffect(() => {

        if (!hasRun.current) {
            hasRun.current = true;
            Object.keys(localStorage).forEach((element) => {
    
                const id = element;
                const parse = JSON.parse(localStorage[element]);
                const title = parse.title;
                const body = parse.body;
                const isFinish = parse.isFinish;
                
                dispatch(
                    drawTask(
                        {id: id, 
                        title: title, 
                        body:body, 
                        isFinish: isFinish}))
                    
                    
                });
        
        }
        
    }, [localstorageTasks])

    const modalOpen = () => {

        dispatch(setModalHidden());

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

                    className={`${'modal'} ${isModalHidden ? '' : 'hidden'}`} />

                <TodoList 

                    taskList={localstorageTasks} 

                   />

            </main>

        </div>
    );
}

export default Posts;
