import { Link } from 'react-router-dom';
import '../auth.css';

export const Register = () => {
    return (
        <section className="register-section">
            <link href="http://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css" />

            <div className="register-block">
                <form>
                    <h1>Register</h1>
                    <input type="text" value="" placeholder="Username" name="username" />
                    <input type="password" value="" placeholder="Password" name="password" />
                    <input type="password" value="" placeholder="Repeat Password" name="repass" />
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
