import '../auth.css';

import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../../contexts/AuthContext';

export const Register = () => {
    const [registerAuth, setRegisterAuth] = useState({ username: '', password: '', repass: '' });
    const [registerError, setRegisterError] = useState('');

    const { setUser } = useContext(AuthContext);

    const navigate = useNavigate();

    const regInputHandler = (e) => {
        setRegisterAuth((state) => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };

    const registerHandler = async (e) => {
        e.preventDefault();

        try {
            const regUsername = registerAuth.username;
            const regPassword = registerAuth.password;
            const regRepass = registerAuth.repass;

            if (regUsername === '' || regPassword === '' || regRepass === '') {
                throw new Error('All fields are required');
            }

            if (regPassword !== regRepass) {
                throw new Error('Password do not match');
            }

            const response = await fetch('http://localhost:5000/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username: regUsername, password: regPassword, repass: regRepass }),
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

            setRegisterAuth({ username: '', password: '', repass: '' });
            setRegisterError({});
        } catch (error) {
            setRegisterError(error.message);
        }
    };
    return (
        <section className="register-section">
            <link href="http://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css" />

            {registerError && (
                <div className="error">
                    <p>{registerError}</p>
                </div>
            )}

            <div className="register-block">
                <form className="register-form" onSubmit={registerHandler}>
                    <h1>Register</h1>
                    <input type="text" value={registerAuth.username} placeholder="Username" name="username" onChange={regInputHandler} />
                    <input
                        type="password"
                        value={registerAuth.password}
                        placeholder="Password"
                        name="password"
                        onChange={regInputHandler}
                        autoComplete="new-password"
                    />
                    <input type="password" value={registerAuth.repass} placeholder="Repeat Password" name="repass" onChange={regInputHandler} />
                    <button>Sign Up</button>
                </form>
                <div className="auth-redirect-container">
                    <Link className="auth-redirect-link" to="/auth/login">
                        Already have an account? Sign in
                    </Link>
                </div>
            </div>
        </section>
    );
};
