import './App.css';

import { Routes, Route } from 'react-router-dom';

import { Navbar } from './components/Navbar/Navbar';
import { Main } from './components/Main/Main';
import { Footer } from './components/Footer/Footer';

import { Home } from './components/Home/Home';
import Profile from './components/Profile/Profile';

import { Platform } from './components/Platforms/Platform/Platform';
import Platforms from './components/Platforms/Platforms';

import Discussions from './components/Forum/Discussions/Discussions';
import CreateDiscussion from './components/Forum/Discussions/CreateDiscussion/CreateDiscussion';
import Discussion from './components/Forum/Discussions/Discussion/Discussion';

import Reviews from './components/Forum/Reviews/Reviews';

import { Game } from './components/Games/Game/Game';
import Games from './components/Games/Games';
import MyGames from './components/MyGames/MyGames';

import { Login } from './components/Auth/Login/Login';
import { Register } from './components/Auth/Register/Register';

import { AuthProvider } from './contexts/AuthContext';
import { NewsProvider } from './contexts/NewsContext';

import NotFound from './components/NotFound/NotFound';

const App = () => {
    return (
        <AuthProvider>
            <NewsProvider>
                <Navbar />
                <Main>
                    <Routes>
                        <Route path="/" element={<Home />} />

                        <Route path="/profile/:userId" element={<Profile />} />

                        <Route path="/game/:gameId" element={<Game />} />
                        <Route path="/games" element={<Games />} />
                        <Route path="/games/:platformName" element={<Games />} />
                        <Route path="/myGames" element={<MyGames />} />

                        <Route path="/platforms" element={<Platforms />} />
                        <Route path="/platforms/:platformId" element={<Platform />} />

                        <Route path="/forum/discussions" element={<Discussions />} />
                        <Route path="/forum/discussion/:discussionId" element={<Discussion />} />
                        <Route path="/forum/discussions/create" element={<CreateDiscussion />} />
                        <Route path="/forum/reviews" element={<Reviews />} />

                        <Route path="/auth/login" element={<Login />} />
                        <Route path="/auth/register" element={<Register />} />

                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Main>
                <Footer />
            </NewsProvider>
        </AuthProvider>
    );
};

export default App;
