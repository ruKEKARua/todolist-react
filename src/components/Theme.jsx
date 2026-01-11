import React, { useEffect, useState } from 'react'

export const Theme = () =>{
    
    const [theme, setTheme] = useState('theme_sun');
    
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
        
        theme == 'theme_sun' ? setTheme('theme_moon') : setTheme('theme_sun');
        
    }

    return (

        <div className={theme} onClick={changeTheme}></div>

    )

}
