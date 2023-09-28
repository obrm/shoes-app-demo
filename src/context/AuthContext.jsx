import { createContext, useState } from "react";

export const AuthContext = createContext();

const userFromLocalStorage = localStorage.getItem('userData')
    ? JSON.parse(localStorage.getItem('userData'))
    : null;

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(userFromLocalStorage);

    const login = (name) => {
        let isAdmin = false;
        if (name === 'admin') {
            isAdmin = true;
        }
        const userData = { name, isAdmin };
        localStorage.setItem('userData', JSON.stringify(userData));
        setUser(userData);
    };

    const logout = () => {
        localStorage.removeItem('userData');
        setUser(null);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                login,
                logout,
            }}>
            {children}
        </AuthContext.Provider>
    );
};