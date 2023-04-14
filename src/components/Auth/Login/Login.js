import '../auth.css';

import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';

import * as request from '../../../services/expressAPI';

export const Login = () => {
    const [loginAuth, setLoginAuth] = useState({ username: '', password: '' });
    const [loginError, setLoginError] = useState('');

    const { setUser } = useContext(AuthContext);

    const navigate = useNavigate();

    const loginInputHandler = (e) => {
        setLoginAuth((state) => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };

    const loginHandler = async (e) => {
        e.preventDefault();

        try {
            const loginUsername = loginAuth.username;
            const loginPassword = loginAuth.password;

            if (loginUsername === '' || loginPassword === '') {
                throw new Error('All fields are required');
            }

            await request.post('/api/auth/login', { username: loginUsername, password: loginPassword })
                .then((data) => {
                    const { authToken, userId, username, avatar } = data;
                    setUser({ username, userId, avatar });

                    localStorage.setItem('authToken', authToken);
                    localStorage.setItem('user', username);
                    localStorage.setItem('userId', userId);
                    localStorage.setItem('avatar', avatar);

                    navigate('/');

                    setLoginAuth({});
                    setLoginError({});
                });
        } catch (error) {
            setLoginError(error.message);
        }
    };

    return (
        <section className="login-section">
            <link href="http://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css" />
            {loginError && (
                <div className="error">
                    <p>{loginError}</p>
                </div>
            )}
            <div className="login-block">
                <form className="login-form" onSubmit={loginHandler}>
                    <h1>Login</h1>
                    <input
                        type="text"
                        value={loginAuth.username}
                        placeholder="Username"
                        name="username"
                        onChange={loginInputHandler}
                    />
                    <input
                        type="password"
                        value={loginAuth.password}
                        placeholder="Password"
                        name="password"
                        onChange={loginInputHandler}
                        autoComplete="new-password"
                    />
                    <button>Sign In</button>
                </form>
                <div className="auth-redirect-container">
                    <Link className="auth-redirect-link" to="/auth/register">
                        Don't have an account? Sign up
                    </Link>
                </div>
            </div>
        </section>
    );
};
