import './styles/App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import { About } from './pages/About';
import Posts from './pages/Posts';
import { SwitchTransition } from 'react-transition-group';

function App() {
    
    return (

        <BrowserRouter>

            <nav>

                <Link to="/about">О сайте</Link> |
                <Link to="/posts">Задачи</Link>
            </nav>

            <Routes>

                <Route path="/about" element={<About />} />
                <Route path="/posts" element={<Posts />} />
                
                <Route
                    path="*"
                    element={<Posts to="/posts" replace />}
                />
                
            </Routes>
        </BrowserRouter>

    )
}

export default App;
