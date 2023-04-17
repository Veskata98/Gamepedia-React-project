import './App.css';

import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import { NewsProvider } from './contexts/NewsContext';

import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';

import Platform from './components/Platforms/Platform/Platform';
import Platforms from './components/Platforms/Platforms';

import Discussions from './components/Forum/Discussions/Discussions';
import Discussion from './components/Forum/Discussions/Discussion/Discussion';
import CreateDiscussion from './components/Forum/Discussions/CreateDiscussion/CreateDiscussion';

import MyDiscussions from './components/Forum/Discussions/MyDiscussions/MyDiscussions';

import Reviews from './components/Forum/Reviews/Reviews';
import Review from './components/Forum/Reviews/Review/Review';
import CreateReview from './components/Forum/Reviews/CreateReview/CreateReview';

import MyReviews from './components/Forum/Reviews/MyReviews/MyReviews';

import About from './components/About/About';

import Game from './components/Games/Game/Game';
import Games from './components/Games/Games';
import MyGames from './components/MyGames/MyGames';

import Login from './components/Auth/Login/Login';
import Register from './components/Auth/Register/Register';

import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/common/PrivateRoute';

const App = () => {
    return (
        <AuthProvider>
            <NewsProvider>
                <Navbar />
                <Main>
                    <Routes>
                        <Route path="/" element={<Home />} />

                        <Route path="/profile/:proflieId" element={
                            <PrivateRoute>
                                <Profile />
                            </PrivateRoute>
                        } />

                        <Route path="/game/:gameId" element={<Game />} />
                        <Route path="/games" element={<Games />} />
                        <Route path="/games/:platformName" element={<Games />} />
                        <Route path="/myGames" element={
                            <PrivateRoute>
                                <MyGames />
                            </PrivateRoute>
                        } />

                        <Route path="/platforms" element={<Platforms />} />
                        <Route path="/platforms/:platformId" element={<Platform />} />

                        <Route path="/forum/discussions" element={<Discussions />} />
                        <Route path="/forum/discussion/:discussionId" element={<Discussion />} />
                        <Route path="/forum/discussions/create" element={<
                            PrivateRoute>
                            <CreateDiscussion />
                        </PrivateRoute>
                        } />

                        <Route path="/forum/discussions/myDiscussions" element={
                            <PrivateRoute>
                                <MyDiscussions />
                            </PrivateRoute                        >} />

                        <Route path="/forum/reviews" element={<Reviews />} />
                        <Route path="/forum/review/:gameTitle" element={<Review />} />
                        <Route path="/forum/reviews/:gameId/createReview" element={
                            <PrivateRoute>
                                <CreateReview />
                            </PrivateRoute>
                        } />

                        <Route path="/forum/reviews/myReviews" element={
                            <PrivateRoute>
                                <MyReviews />
                            </PrivateRoute>
                        } />

                        <Route path='/about' element={<About />} />

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
