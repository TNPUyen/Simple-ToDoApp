import React, {useContext} from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { UserContext } from "../helpers/userContext";

// const isAuthenticated = () => {
//     const userInfo = JSON.parse(localStorage.getItem('userInfo'));
//     if(userInfo != null){
//         return true;
//     }
//     return false;
// };

const useAuth = () => {
    // const { user } = useContext(UserContext);
    // console.log(user.loggedIn)
    const loggedIn = localStorage.getItem('loggedIn');
    console.log(loggedIn)
    return loggedIn;
  };

export default function ProtectedRoute() {
    const location = useLocation();
    const isAuth = useAuth();
    return isAuth ? <Outlet /> : <Navigate to='/' replace state={{from: location}}/>
}
