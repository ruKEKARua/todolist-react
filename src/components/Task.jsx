import React from 'react'
import { Paragrath } from '../UI/Paragrath/Paragrath'
import { Button } from '../UI/Buttons/Buttons'

import paragrathStyle from '../UI/Paragrath/Paragrath.module.css'
import buttonStyle from '../UI/Buttons/Buttons.module.css'

export const Task = ({title, body, task, removeTask, id}) =>{

    const deleteTask = () => {

        removeTask(task)

    }

    return (
        
        <div className='task'>

            <div className='delete_button_block'> 
                <Button title={'Delete'} className={buttonStyle.ButtonDelete} func={deleteTask}/>
            </div>
            <div className='task_main_block'>
                <Paragrath title={title} className={paragrathStyle.title}/>
                <Paragrath title={body} className={paragrathStyle.body}/>
            </div>

        </div>

    )

}
