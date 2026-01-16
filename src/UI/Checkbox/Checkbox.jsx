import React from 'react'
import checkboxStyles from './Checkbox.module.css'

const Checkbox = ({checked, ...props}) => {

    return (
        <input type='checkbox' checked={checked} className={`${checkboxStyles.checkbox}`} {...props}/>
    )
}

export default Checkbox