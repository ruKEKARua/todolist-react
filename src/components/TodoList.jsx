import React from 'react'

import { Task } from './Task';

export const TodoList = ({taskList, removeTask}) =>{

    return (
        
        <div className='tasks_column'>
        
            {taskList.map((todo) => 

                <Task title={todo.title} body={todo.body} key={todo.id} task={todo} removeTask={removeTask}/> 
            
            )}
        
        </div>

    )

}
