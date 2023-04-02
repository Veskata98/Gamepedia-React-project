import '../auth.css';

import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';

export const Login = () => {
    const [loginAuth, setLoginAuth] = useState({});

    const { setUser } = useContext(AuthContext);

    const navigate = useNavigate();

    const userInputHandler = (e) => {
        setLoginAuth((state) => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };

    const loginHandler = async (e) => {
        e.preventDefault();

        // fetch('http://localhost:5000/auth/login', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     credentials: 'include',
        //     body: JSON.stringify({ ...loginAuth }),
        // })
        //     .then((res) => res.json())
        //     .then((result) => {
        //         setUser({ username: result.username });
        //         localStorage.setItem('user', result.username);
        //         localStorage.setItem('userId', result.userId);
        //         navigate('/');
        //     })
        //     .catch((err) => {
        //         console.error(err);
        //         alert('Error logging in please try again');
        //     });

        const oldToken = localStorage.getItem('token');

        const response = await fetch('http://localhost:5000/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${oldToken}` },
            body: JSON.stringify({ username: loginAuth.username, password: loginAuth.password }),
        });

        // Parse the response as JSON and store the token in local storage or a cookie
        const { token, userId, username } = await response.json();
        setUser({ username: username });

        localStorage.setItem('token', token);
        localStorage.setItem('user', username);
        localStorage.setItem('userId', userId);

        navigate('/');

        // setUser({ username: '', password: '' });
    };

    return (
        <section className="login-section">
            <link href="http://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css" />
            <div className="login-block">
                <form onSubmit={loginHandler}>
                    <h1>Login</h1>
                    <input type="text" value={loginAuth.username} placeholder="Username" name="username" onChange={userInputHandler} />
                    <input type="password" value={loginAuth.password} placeholder="Password" name="password" onChange={userInputHandler} />
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
