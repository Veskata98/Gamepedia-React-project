import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});

    const localStorageUser = localStorage.getItem('user');
    const localStorageUserId = localStorage.getItem('userId');
    const token = localStorage.getItem('token');

    useEffect(() => {
        if (localStorageUser) {
            setUser({ username: localStorageUser, userId: localStorageUserId, token });
        }
    }, [localStorageUser, localStorageUserId, token]);

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
