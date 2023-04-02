import './App.css';

import { Routes, Route } from 'react-router-dom';

import { Navbar } from './components/Navbar/Navbar';
import { Home } from './components/Home/Home';
import { Footer } from './components/Footer/Footer';

import { Forum } from './components/Forum/Forum';

import { Login } from './components/Auth/Login/Login';
import { Register } from './components/Auth/Register/Register';

import Games from './components/Games/Games';
import { Game } from './components/Games/Game/Game';

import { AuthProvider } from './contexts/AuthContext';
import { NewsProvider } from './contexts/NewsContext';
import { GamesProvider } from './contexts/GameContext';

const App = () => {
    return (
        <AuthProvider>
            <GamesProvider>
                <NewsProvider>
                    <Navbar />
                    <main className="main">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/game/:gameId" element={<Game />} />
                            <Route path="/games" element={<Games />} />
                            <Route path="/games/:platformName" element={<Games />} />
                            <Route path="/forum" element={<Forum />} />
                            <Route path="/auth/login" element={<Login />} />
                            <Route path="/auth/register" element={<Register />} />
                        </Routes>
                    </main>
                    <Footer />
                </NewsProvider>
            </GamesProvider>
        </AuthProvider>
    );
};

export default App;
