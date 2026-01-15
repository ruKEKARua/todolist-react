import { createSlice } from '@reduxjs/toolkit'

export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
      value: 'theme_sun'
    },
    reducers: {
        
        setThemeSun: state => {

            state.value = 'theme_sun';

        },

        setThemeMoon: state => {

            state.value = 'theme_moon';

        }

    }
})

export const { setThemeSun, setThemeMoon } = themeSlice.actions

export default themeSlice.reducer