import './navbar.css';

import logo from '../../assets/logo.png';
import gemepediaTextLogo from '../../assets/gemepedia-text-logo.png';

import { Link, NavLink } from 'react-router-dom';

import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

import Logout from './Logout/Logout';


export const Navbar = () => {
    const { user } = useContext(AuthContext);

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
                        <li className="navbar-item user">
                            <Link className="navbar-item-username" to={`/profile/${user.userId}`}>
                                <img className="navbar-user-avatar" src={user.avatar} alt="user-avatar" />
                                {user.username}
                            </Link>
                        </li>
                        <li className="navbar-item logout-form">
                            <Logout />
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
