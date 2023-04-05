import './App.css';

import { Routes, Route } from 'react-router-dom';

import { Navbar } from './components/Navbar/Navbar';
import { Main } from './components/Main/Main';
import { Footer } from './components/Footer/Footer';

import { Home } from './components/Home/Home';
import { Forum } from './components/Forum/Forum';
import Platforms from './components/Platforms/Platforms';

import Games from './components/Games/Games';
import { Game } from './components/Games/Game/Game';

import { Login } from './components/Auth/Login/Login';
import { Register } from './components/Auth/Register/Register';

import { AuthProvider } from './contexts/AuthContext';
import { NewsProvider } from './contexts/NewsContext';
import { GamesProvider } from './contexts/GameContext';
import { Platform } from './components/Platforms/Platform/Platform';

const App = () => {
    return (
        <AuthProvider>
            <GamesProvider>
                <NewsProvider>
                    <Navbar />
                    <Main>
                        <Routes>
                            <Route path="/" element={<Home />} />

                            <Route path="/game/:gameId" element={<Game />} />
                            <Route path="/games" element={<Games />} />
                            <Route path="/games/:platformName" element={<Games />} />

                            <Route path="/platforms" element={<Platforms />} />
                            <Route path="/platforms/:platformId" element={<Platform />} />

                            <Route path="/forum" element={<Forum />} />

                            <Route path="/auth/login" element={<Login />} />
                            <Route path="/auth/register" element={<Register />} />
                        </Routes>
                    </Main>
                    <Footer />
                </NewsProvider>
            </GamesProvider>
        </AuthProvider>
    );
};

export default App;
