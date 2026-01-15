import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setThemeMoon, setThemeSun } from '../store/themeSlice';

export const Theme = () =>{

    const dispatch = useDispatch()

    const theme = useSelector((state) => state.theme.value);
    
    useEffect(() => {

        if (theme != 'theme_sun') {
           
            document.body.style.backgroundColor = '#ffffff';
            document.body.style.color = 'black';
            
        } else {

            document.body.style.backgroundColor = '#333';
            document.body.style.color = 'white';

        }

    }, [theme])

    const changeTheme = () => {
        
        theme == 'theme_sun' ? dispatch(setThemeMoon()) : dispatch(setThemeSun());
        
    }

    return (

        <div className={theme} onClick={changeTheme}></div>

    )

}
