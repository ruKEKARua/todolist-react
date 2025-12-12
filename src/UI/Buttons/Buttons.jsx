import React from 'react'

export const Button = ({title, func, className, props}) =>{

    return (

        <button onClick={func} className={className} {...props}>{title}</button>

    )

}
