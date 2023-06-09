import './logout.css';

import * as request from '../../../services/expressAPI';

import { useContext } from 'react';

import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../../contexts/AuthContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const Logout = () => {
    const { logout } = useContext(AuthContext);

    const navigate = useNavigate();

    const logoutHandler = async (e) => {
        e.preventDefault();

        try {
            await request.post('/api/auth/logout');

            localStorage.removeItem('authToken');
            localStorage.removeItem('user');
            localStorage.removeItem('userId');
            localStorage.removeItem('avatar');
            logout();

            navigate('/');
        } catch (err) {
            console.log(err.message);
        }
    };
    return (
        <form className="navbar-logout-form" onSubmit={logoutHandler}>
            <button data-hover="Log Out" className="logout-btn"><FontAwesomeIcon icon={faRightFromBracket} /></button>
        </form>
    );
}

export default Logout;