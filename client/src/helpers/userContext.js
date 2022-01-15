import { createContext, useState } from "react";
import { AuthAction } from "../actions/authAction";
import { useNavigate } from "react-router-dom";
export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [user, setUser] = useState({ info: '', loggedIn: false });

    // Login updates the user data 
    const login = (userInfo) => {
        return new Promise((response) =>{
            setUser({
                info: userInfo,
                loggedIn: true,
            });
            localStorage.setItem('loggedIn', true);
            response();
        })
    };

    // Logout updates the user data to default
    const logout = () => {
        return new Promise((response) => {
            setUser({
                info: '',
                loggedIn: false,
            });
            localStorage.setItem('loggedIn', false);
            response();    
        })
    };
    return(
        <UserContext.Provider value={{user, login, logout, setUser}}>
            {children}
        </UserContext.Provider>
    );
};
