import React from 'react'

export const Button = ({title, func, className}) =>{

    return (

        <button onClick={func} className={className}>{title}</button>

    )

}
