import '../auth.css';

import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';

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

            const response = await fetch('http://localhost:5000/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username: loginUsername, password: loginPassword }),
            });

            if (!response.ok) {
                const errorMsg = (await response.json()).error;
                throw Error(errorMsg);
            }

            const { token, userId, username } = await response.json();
            setUser({ username, userId });

            localStorage.setItem('token', token);
            localStorage.setItem('user', username);
            localStorage.setItem('userId', userId);

            navigate('/');

            setLoginAuth({});
            setLoginError({});
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
                    <input type="text" value={loginAuth.username} placeholder="Username" name="username" onChange={loginInputHandler} />
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
