import './navbar.css';
import logo from '../../assets/logo.png';

import * as request from '../../services/expressAPI';

import { Link, NavLink, useNavigate } from 'react-router-dom';
import gemepediaTextLogo from '../../assets/gemepedia-text-logo.png';

import { useContext } from 'react';

import { AuthContext } from '../../contexts/AuthContext';

export const Navbar = () => {
    const { user, setUser } = useContext(AuthContext);

    const navigate = useNavigate();

    const logoutHandler = async (e) => {
        e.preventDefault();

        try {
            await request.post('/api/auth/logout', { userId: user.userId }, (path) => navigate(path));

            localStorage.removeItem('authToken');
            localStorage.removeItem('user');
            localStorage.removeItem('userId');
            setUser({});

            navigate('/');
        } catch (err) {
            console.log(err.message);
        }
    };

    return (
        <header className="navbar">
            <nav className="navbar-nav">
                <Link className="navbar-link" to="/">
                    <div className="navbar-logo-container">
                        <img className="navbar-brand-logo" src={logo} alt="brand-name" />
                        <img className="navbar-brand-name" src={gemepediaTextLogo} alt="brand-img" />
                    </div>
                </Link>

                <ul className="navbar-list">
                    <li className="navbar-item">
                        <NavLink to="/">News</NavLink>
                    </li>
                    <li className="navbar-item">
                        <NavLink to="/games">Games</NavLink>
                    </li>
                    <li className="navbar-item">
                        <NavLink to="/platforms">Platforms</NavLink>
                    </li>
                    <li className="navbar-item">
                        <NavLink to="/forum">Forum</NavLink>
                    </li>
                    {user.username && (
                        <li className="navbar-item">
                            <NavLink to="/myGames">My Games</NavLink>
                        </li>
                    )}
                </ul>
                {user.username ? (
                    <ul className="user-nav-list">
                        <li className="navbar-item">
                            <p className="navbar-item-username">{user.username}</p>
                        </li>
                        <li className="navbar-item">
                            <form className="navbar-logout-form" onSubmit={logoutHandler}>
                                <button className="logout-btn">Logout</button>
                            </form>
                        </li>
                    </ul>
                ) : (
                    <ul className="user-nav-list">
                        <li className="navbar-item">
                            <Link to="/auth/login">Login</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/auth/register">Register</Link>
                        </li>
                    </ul>
                )}
            </nav>
        </header>
    );
};
