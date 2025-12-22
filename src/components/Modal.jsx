import React from 'react'
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations'
import { Inputs } from './Inputs';
import { Button } from '../UI/Buttons/Buttons';

import buttonStyle from '../UI/Buttons/Buttons.module.css'

export const Modal = ({createNewTask, className, closeModal}) =>{

    const Fade = styled.div`animation: 0.25s ${keyframes`${fadeIn}`}`;

    return (
        
        <Fade>

            <div className={className}>
                
                <Inputs createNewTask={createNewTask} closeModal={closeModal}/>

                <Button func={closeModal} title={'X'} className={buttonStyle.closeModal}/>

            </div>  

        </Fade>
        
    )

}
