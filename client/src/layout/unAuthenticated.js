import React from 'react';
import Login from '../pages/Login/login';
import Register from '../pages/Register/register';
import { Routes, Route} from 'react-router-dom';

export default function UnAuthenticated() {
    return (
        <Routes>
            <Route path='/' exact element={<Login/>}/>
            <Route path='/register' exact element={<Register/>}/>
        </Routes>
    )
}
