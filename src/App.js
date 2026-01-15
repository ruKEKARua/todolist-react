import './styles/App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import { About } from './pages/About';
import Posts from './pages/Posts';
import { useState } from 'react';
import PostsPlaceholder from './pages/PostsPlaceholder';

function App() {

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
