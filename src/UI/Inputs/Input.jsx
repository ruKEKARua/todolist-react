import React, { useState } from 'react'
import classes from './Input.module.css'

export const Input = ({value, name, onChange}) =>{

    return (

        <input type="text" value={value} placeholder={name} onChange={onChange} className={classes.Inputs}/>

    )

}
