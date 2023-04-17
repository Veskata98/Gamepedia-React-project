import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(() => {
        const localStorageUser = localStorage.getItem('user');
        const localStorageUserId = localStorage.getItem('userId');
        const avatar = localStorage.getItem('avatar');
        if (localStorageUser) {
            setIsAuthenticated(true);
        }
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

    const login = (userData) => {
        setUser(userData);
        setIsAuthenticated(true);
    }

    const register = (userData) => {
        setUser(userData);
        setIsAuthenticated(true);
    }

    const logout = () => {
        setUser({});
        setIsAuthenticated(false);
    }

    const changeAvatar = (newAvatar) => {
        setUser(state => ({
            ...state,
            avatar: newAvatar
        }));
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                login,
                logout,
                register,
                changeAvatar,
                isAuthenticated
            }}>
            {children}
        </AuthContext.Provider>
    );
};
