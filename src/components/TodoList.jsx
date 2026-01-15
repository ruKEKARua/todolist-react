import React from 'react'

import { Task } from './Task';

export const TodoList = ({taskList}) =>{

    return (
        
        <div className='tasks_column'>
        

            {taskList.map((todo) => 

                <Task 
                    title={todo.title} 
                    body={todo.body} 
                    key={todo.id} 
                    id={todo.id} 
                    task={todo}
                    isFinish={todo.isFinish}
                /> 

            )}
        
        </div>

    )

}
