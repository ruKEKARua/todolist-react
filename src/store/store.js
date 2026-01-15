import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import nameReducer  from './testSlice'
import localstorageSlice from './localstorageSlicer'
import modalSlice from './modalSlice'
import themeSlice  from './themeSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    name: nameReducer,
    listStorage: localstorageSlice,
    modal: modalSlice,
    theme: themeSlice
  }
})