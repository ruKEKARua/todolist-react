import { createSlice } from '@reduxjs/toolkit'

export const randomName = createSlice({

    name: 'textMaker',
    initialState: {value: 'даник'},
    reducers: {

        oskar: state => {
            state.value = 'оскар';
        },

        danik: state => {
            state.value = 'даник';
        },

        jenya: state => {
            state.value = 'женя';
        }

    }

})

export const { oskar, danik, jenya } = randomName.actions

export default randomName.reducer