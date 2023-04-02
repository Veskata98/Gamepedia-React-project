import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});

    const localStorageUser = localStorage.getItem('user');

    useEffect(() => {
        if (localStorageUser) {
            setUser({ username: localStorageUser });
        }
    }, [localStorageUser]);

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
