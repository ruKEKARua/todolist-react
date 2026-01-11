import './styles/App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import { About } from './pages/About';
import Posts from './pages/Posts';
import { useEffect, useState } from 'react';
import PostsPlaceholder from './pages/PostsPlaceholder';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo, setFilter } from './store/todoStore';

function App() {
  // 1. Диспетчер - это функция, которая "вызывает" изменения в хранилище
    const dispatch = useDispatch();
    
    // 2. Получаем данные из хранилища
    // Это как useState, но для всего приложения
    const todos = useSelector(state => state.todos.todos);
    const filter = useSelector(state => state.todos.filter);
    
    // 3. Загружаем из localStorage при загрузке
    useEffect(() => {
      const saved = localStorage.getItem('todos');
      if (saved) {
        const parsed = JSON.parse(saved);
        // Восстанавливаем из localStorage
        parsed.forEach(todo => {
          dispatch(addTodo(todo.text)); // немного костыльно, но для начала сойдет
        });
      }
    }, [dispatch]);
    
    // 4. Фильтрация задач
    const filteredTodos = todos.filter(todo => {
      if (filter === 'active') return !todo.completed;
      if (filter === 'completed') return todo.completed;
      return true;
    });
    
    // 5. Подсчет активных
    const activeCount = todos.filter(todo => !todo.completed).length;
    
    // 6. Обработчики - просто вызываем dispatch с нужной функцией
    const handleAddTodo = (text) => {
      if (text.trim()) {
        dispatch(addTodo(text));
      }
    };
    
    const handleToggle = (id) => {
      dispatch(toggleTodo(id));
    };
    
    const handleDelete = (id) => {
      dispatch(deleteTodo(id));
    };
    
    const handleFilterChange = (newFilter) => {
      dispatch(setFilter(newFilter));
    };
    
    const handleClearCompleted = () => {
      todos.forEach(todo => {
        if (todo.completed) {
          dispatch(deleteTodo(todo.id));
        }
      });
    };


    return (

        
            <BrowserRouter>

                <div className='navigation_wrapper'>
                    <nav>

                        <Link to="todolist-react/about">О сайте</Link> |
                        <Link to="todolist-react/posts">Задачи</Link> |
                        <Link to="todolist-react/posts-placeholder">Демонстрация</Link>

                    </nav>
                </div>

                <Routes>

                    <Route path="todolist-react/about" element={<About />} />
                    <Route path="todolist-react/posts" element={<Posts />} />
                    <Route path="todolist-react/posts-placeholder" element={<PostsPlaceholder />} />
                    
                    <Route
                        path="*"
                        element={<Posts to="/posts" replace />}
                    />
                    
                </Routes>
            </BrowserRouter>
    )
}

export default App;
