import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

export default function ProtectedRoute({children, user}) {

    const location = useLocation();
    return user.loggedIn === true ? children : <Navigate to='/' replace state={{from: location}}/>

}
