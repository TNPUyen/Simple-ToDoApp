import { createContext, useState } from "react";
import { AuthAction } from "../actions/authAction";
import { useNavigate } from "react-router-dom";
export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [user, setUser] = useState({ name: '', loggedIn: false });
    // const navigate = useNavigate();
    // Login updates the user data with a name parameter
    const login = async (userName, password) => {
        setUser((user) => ({
            name: userName,
            loggedIn: true,
        }));
        localStorage.setItem('loggedIn', user.loggedIn);
        console.log(user.loggedIn)
    };

    // Logout updates the user data to default
    const logout = () => {
        setUser((user) => ({
        name: '',
        loggedIn: false,
        }));
        localStorage.removeItem('loggedIn');
        console.log(user.loggedIn)

    };
    return(
        <UserContext.Provider value={{user, login, logout}}>
            {children}
        </UserContext.Provider>
    );
};
