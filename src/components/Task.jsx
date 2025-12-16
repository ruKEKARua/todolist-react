import React from 'react'
import { Paragrath } from '../UI/Paragrath/Paragrath'
import { Button } from '../UI/Buttons/Buttons'

import paragrathStyle from '../UI/Paragrath/Paragrath.module.css'
import buttonStyle from '../UI/Buttons/Buttons.module.css'

export const Task = ({title, body, task, removeTask}) =>{

    const deleteTask = () => {

        removeTask(task)

    }

    return (
        
        <div className='task'>

            <Button title={'Delete'} className={buttonStyle.ButtonDelete} func={deleteTask}/>
            <Paragrath title={title} className={paragrathStyle.title}/>
            <Paragrath title={body} className={paragrathStyle.body}/>

        </div>

    )

}
