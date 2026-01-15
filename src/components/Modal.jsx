import React from 'react'
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations'
import { Inputs } from './Inputs';
import { Button } from '../UI/Buttons/Buttons';

import buttonStyle from '../UI/Buttons/Buttons.module.css'
import { useDispatch } from 'react-redux';
import { setModalHidden } from '../store/modalSlice';

export const Modal = ({className}) =>{

    const dispatch = useDispatch()

    const Fade = styled.div`animation: 0.25s ${keyframes`${fadeIn}`}`;

    const closeModal = () => {

        dispatch(setModalHidden());

    }

    return (
        
        <Fade>

            <div className={className}>
                
                <Inputs />

                <Button func={closeModal} title={'X'} className={buttonStyle.closeModal}/>

            </div>  

        </Fade>
        
    )

}
