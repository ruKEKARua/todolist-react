import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoStore';

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});