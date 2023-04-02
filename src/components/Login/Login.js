import './auth.css';

import { Link } from 'react-router-dom';
import { useState } from 'react';

export const Login = () => {
    const [user, setUser] = useState({ username: '', password: '' });

    const userInputHandler = (e) => {
        setUser((state) => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };

    const loginHandler = (e) => {
        e.preventDefault();

        const { username, password } = Object.fromEntries(new FormData(e.target));

        setUser({ username: '', password: '' });
    };

    return (
        <section className="login-section">
            <link href="http://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css" />
            <div className="login-block">
                <form onSubmit={loginHandler}>
                    <h1>Login</h1>
                    <input type="text" value={user.username} placeholder="Username" name="username" onChange={userInputHandler} />
                    <input type="password" value={user.password} placeholder="Password" name="password" onChange={userInputHandler} />
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
