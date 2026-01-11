import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
  filter: 'all',
};


const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    
    addTodo: (state, action) => {
      state.todos.push({
        id: Date.now().toString(),
        text: action.payload,
        completed: false,
        date: new Date().toLocaleDateString(),
      });
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    
    toggleTodo: (state, action) => {
      const todo = state.todos.find(t => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
        localStorage.setItem('todos', JSON.stringify(state.todos));
      }
    },
    
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(t => t.id !== action.payload);
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo, setFilter } = todoSlice.actions;

export default todoSlice.reducer;