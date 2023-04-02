import './App.css';

import { Routes, Route } from 'react-router-dom';

import { Navbar } from './components/Navbar/Navbar';
import { Home } from './components/Home/Home';
import { Footer } from './components/Footer/Footer';

import { Forum } from './components/Forum/Forum';

import { Login } from './components/Login/Login';

import Games from './components/Games/Games';
import { Game } from './components/Games/Game/Game';

import { AuthContext } from './contexts/AuthContext';
import { NewsProvider } from './contexts/NewsContext';
import { GamesProvider } from './contexts/GameContext';

const App = () => {
    // const [user, setUser] = useState();

    // useEffect(() => {
    //     setUser({ username: '' });
    // }, []);

    // const AuthContext = createContext();

    return (
        <AuthContext.Provider value={{ username: 'Venko' }}>
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
                        </Routes>
                    </main>
                    <Footer />
                </NewsProvider>
            </GamesProvider>
        </AuthContext.Provider>
    );
};

export default App;
