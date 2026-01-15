import { createSlice } from '@reduxjs/toolkit'

export const localstorageSlice = createSlice({
    name: 'localstorage',
    initialState: {
      value: []
    },
    reducers: {
        
        drawTask: (state, action) => {

            state.value.push(action.payload)

        },

        filter: (state, action) => {

            const task = action.payload;

            state.value = state.value.filter(p => p.id !== task.id)

        },

        updateTaskDispatch: (state, action) => {

            const updatedTask = action.payload;

            state.value = state.value.map(task => 
                task.id === updatedTask.id ? updatedTask : task
            )

        }

    }
})

export const { drawTask, filter, updateTaskDispatch } = localstorageSlice.actions

export default localstorageSlice.reducer