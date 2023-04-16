import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const localStorageUser = localStorage.getItem('user');
        const localStorageUserId = localStorage.getItem('userId');
        const avatar = localStorage.getItem('avatar');
        return localStorageUser
            ? { username: localStorageUser, userId: localStorageUserId, avatar }
            : {};
    });

    useEffect(() => {
        if (Object.keys(user).length > 0) {
            localStorage.setItem('user', user.username);
            localStorage.setItem('userId', user.userId);
            localStorage.setItem('avatar', user.avatar);
        }
    }, [user]);

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
            }}>
            {children}
        </AuthContext.Provider>
    );
};
