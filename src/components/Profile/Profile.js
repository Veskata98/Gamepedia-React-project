import './profile.css';
import defaultAvatar from '../../assets/defaultAvatar.png';

import * as request from '../../services/expressAPI';

import { useContext, useState } from 'react';

import { AuthContext } from '../../contexts/AuthContext';
import { Navigate, useNavigate, useParams } from 'react-router-dom';

const Profile = () => {
    const [file, setFile] = useState(null);
    const [passwords, setPasswords] = useState({ oldPassword: '', newPassword: '', repass: '' });

    const [message, setMessage] = useState('');
    const [isMessageVisible, setIsMessageVisible] = useState(false);

    const { user, changeAvatar, logout } = useContext(AuthContext);

    const { proflieId } = useParams();

    const navigate = useNavigate();

    if (proflieId !== user.userId) {
        return <Navigate to='/' replace />;
    }

    const passwordInputHandler = (e) => {
        setPasswords((state) => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };

    const passwordSaveHandler = async (e) => {
        e.preventDefault();

        try {
            const oldPassword = passwords.oldPassword;
            const newPassword = passwords.newPassword;
            const repass = passwords.repass;

            if (oldPassword === '' || newPassword === '' || repass === '') {
                throw new Error('All fields are required');
            }

            if (newPassword !== repass) {
                throw new Error('Password do not match');
            }

            await request.post('/api/profile/changePassword', { oldPassword, newPassword, repass });
            setPasswords({ oldPassword: '', newPassword: '', repass: '' });
            setMessage('Password successfully changed!');

            setIsMessageVisible(true);

            setTimeout(() => {
                setIsMessageVisible(false);
                setMessage('');
            }, 2000);

        } catch (error) {
            setMessage(error.message);

            setIsMessageVisible(true);

            setTimeout(() => {
                setIsMessageVisible(false);
                setMessage('');
            }, 2000);
        }
    };

    const avatarChangeHandler = (event) => {
        setFile(event.target.files[0]);
    }

    const avatarSaveHandler = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();
            formData.append('avatar', file);

            const authToken = localStorage.getItem('authToken');

            const response = await fetch('http://localhost:5000/api/profile/changeAvatar', {
                method: "POST",
                headers: { "authToken": authToken },
                credentials: 'include',
                body: formData
            });

            const newAvatar = await response.json();

            localStorage.setItem('avatar', newAvatar);

            changeAvatar(newAvatar);

            setMessage('Profile picture successfully changed!');

            setIsMessageVisible(true);

            setTimeout(() => {
                setIsMessageVisible(false);
                setMessage('');
            }, 2000);

            e.target.reset();
            setFile(null);
        } catch (error) {
            console.log(error.message);
        }
    }

    const deleteProfileHandler = async () => {
        const confirm = window.confirm("Are you sure you want to delete your profile?");

        if (confirm) {
            try {
                await request.del('/api/profile/deleteProfile');
                localStorage.removeItem('user');
                localStorage.removeItem('userId');
                localStorage.removeItem('authToken');
                localStorage.removeItem('avatar');

                logout();

                navigate('/');
            } catch (error) {
                console.log(error.message);
            }
        }
    }

    return (
        <div className="profile-container">
            {isMessageVisible && <p className="profile-message">{message}</p>}
            <h2 className="profile-username">{user.username}</h2>
            <img className="profile-avatar" src={user.avatar || defaultAvatar} alt="user_avatar"></img>
            <form className="profile-form" onSubmit={avatarSaveHandler}>
                <input className="profile-file-upload" type="file" accept=".jpeg,.jpg,.png,.gif" onChange={avatarChangeHandler} />
                <button className="profile-btn-save" disabled={!file}>Save</button>
            </form>
            <form className="profile-form" onSubmit={passwordSaveHandler}>
                <input className="profile-input-old-password" placeholder="Old Password" type="password" autoComplete="new-password" name="oldPassword" value={passwords.oldPassword} onChange={passwordInputHandler} />
                <input className="profile-input-new-password" placeholder="New Password" type="password" name="newPassword" value={passwords.newPassword} onChange={passwordInputHandler} />
                <input className="profile-input-repass" placeholder="Repeat New Password" type="password" name="repass" value={passwords.repass} onChange={passwordInputHandler} />
                <button className="profile-btn-change-password">Change password</button>
            </form>
            <button className="profile-btn-delete" onClick={deleteProfileHandler}>Delete account</button>
        </div>
    );
}

export default Profile;