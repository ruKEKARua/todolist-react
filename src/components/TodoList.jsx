import React from 'react'

import { Task } from './Task';

export const TodoList = ({taskList, removeTask, updateTask }) =>{

    return (
        
        <div className='tasks_column'>
        

            {taskList.map((todo) => 

                <Task 
                    title={todo.title} 
                    body={todo.body} 
                    key={todo.id} 
                    id={todo.id} 
                    task={todo} 
                    removeTask={removeTask} 
                    updateTask={updateTask}    
                /> 

            )}
        
        </div>

    )

}
