import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

export default function ProtectedRoute({children, user}) {
  const loggedIn = localStorage.getItem('loggedIn');

    const location = useLocation();
    console.log(user);
    return user.loggedIn === true ? children : <Navigate to='/' replace state={{from: location}}/>

}
