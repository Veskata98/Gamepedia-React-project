import './profile.css';
import defaultAvatar from '../../assets/defaultAvatar.png';

import * as request from '../../services/expressAPI';

import { useContext, useState } from 'react';

import { AuthContext } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const [file, setFile] = useState(null);
    const [passwords, setPasswords] = useState({ oldPassword: '', newPassword: '', repass: '' });

    const { user, setUser } = useContext(AuthContext);

    const navigate = useNavigate();

    const changePasswordInput = (e) => {
        setPasswords((state) => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };

    const changePasswordHandler = async (e) => {
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
            console.log("successful changed password");

        } catch (error) {
            console.log(error.message);
        }
    };

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    }

    const uploadAvatarHandler = async (e) => {
        e.preventDefault();

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

        setUser(state => ({
            ...state,
            avatar: newAvatar
        }));

        e.target.reset();
        setFile(null);
    }

    const deleteProfileHandler = async () => {
        const confirm = window.confirm("Are you sure you want to delete your profile?");

        if (confirm) {
            await request.del('/api/profile/deleteProfile');
            localStorage.removeItem('user');
            localStorage.removeItem('userId');
            localStorage.removeItem('authToken');
            localStorage.removeItem('avatar');

            setUser({});

            navigate('/');
        }
    }

    return (
        <div className="profile-container">
            <h2 className="profile-username">{user.username}</h2>
            <img className="profile-avatar" src={user.avatar || defaultAvatar} alt='user_avatar'></img>
            <form className="profile-form" onSubmit={uploadAvatarHandler}>
                <input className="profile-file-upload" type="file" accept="image/*" onChange={handleFileChange} />
                <button className="profile-btn-save">Save</button>
            </form>
            <form className="profile-form" onSubmit={changePasswordHandler}>
                <input className="profile-input-old-password" placeholder='Old Password' type="password" autoComplete="new-password" name='oldPassword' value={passwords.oldPassword} onChange={changePasswordInput} />
                <input className="profile-input-new-password" placeholder='New Password' type="password" name='newPassword' value={passwords.newPassword} onChange={changePasswordInput} />
                <input className="profile-input-repass" placeholder='Repeat New Password' type="password" name='repass' value={passwords.repass} onChange={changePasswordInput} />
                <button className="profile-btn-change-password">Change password</button>
            </form>
            <button className="profile-btn-delete" onClick={deleteProfileHandler}>Delete account</button>
        </div>
    );
}

export default Profile;