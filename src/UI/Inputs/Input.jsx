import React, { useState } from 'react'

export const Input = ({value, name, onChange, className}) =>{

    return (

        <input type="text" value={value} placeholder={name} onChange={onChange} className={className}/>

    )

}
