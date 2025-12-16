import React from 'react'

export const Textarea = ({className, value, ...props}) =>{

    return (
        
        <textarea className={className} value={value} {...props}/>

    )

}
