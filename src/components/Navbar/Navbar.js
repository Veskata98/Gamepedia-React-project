import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import gemepediaTextLogo from '../../assets/gemepedia-text-logo.png';

import './header.css';
import { useContext } from 'react';

import { AuthContext } from '../../contexts/AuthContext';

export const Navbar = () => {
    const { username } = useContext(AuthContext);

    return (
        <header className="header">
            <nav className="header-nav">
                <Link className="header-link" to="/">
                    <div className="header-logo-container">
                        <img className="header-brand-logo" src={logo} alt="brand-name" />
                        <img className="header-brand-name" src={gemepediaTextLogo} alt="brand-img" />
                    </div>
                </Link>

                <ul className="header-list">
                    <li className="header-item">
                        <NavLink to="/">News</NavLink>
                    </li>
                    <li className="header-item">
                        <NavLink to="/games">Games</NavLink>
                    </li>
                    <li className="header-item">
                        <NavLink to="/platforms">Platforms</NavLink>
                    </li>
                    <li className="header-item">
                        <NavLink to="/forum">Forum</NavLink>
                    </li>
                    <li className="header-item">
                        <NavLink to="/myGames">My Games</NavLink>
                    </li>
                </ul>
                {username ? (
                    <ul className="user-nav-list">
                        <li className="header-item">
                            <p className="header-item-username">Welcome, {username}</p>
                        </li>
                        <li className="header-item">
                            <form className="header-logout-form" action="/auth/logout" method="post">
                                <button className="logout-btn">Logout</button>
                            </form>
                        </li>
                    </ul>
                ) : (
                    <ul className="user-nav-list">
                        <li className="header-item">
                            <Link to="/auth/login">Login</Link>
                        </li>
                        <li className="header-item">
                            <a href="/auth/register">Register</a>
                        </li>
                    </ul>
                )}
            </nav>
        </header>
    );
};
