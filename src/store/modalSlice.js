import { createSlice } from '@reduxjs/toolkit'

export const modalSlice = createSlice({
    name: 'modal',
    initialState: {
      value: false
    },
    reducers: {
        
        setModalHidden: state => {
            state.value = !state.value
        }

    }
})

export const { setModalHidden, toggleModal } = modalSlice.actions

export default modalSlice.reducer