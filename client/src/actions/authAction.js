import React, { Component } from 'react'
import {addNewUser, login} from '../services/authService';

    const handleLogin = async (userName, password) => {
        try {
            const user = {
                userName: userName,
                password: password
            }
            const data = await login(user);
            return data;
            // if(data.message == 'Login successfully!'){
            //     localStorage.setItem('userInfo', JSON.stringify(data.user));
            //     // return {message: data.message};
            // }else{
            //     console.log(data.message);
            // }
        } catch (error) {
            console.log(error);
        }
    };

    const handleLogout = () =>{
        localStorage.removeItem('userInfo');
    }

    export const AuthAction = {
        handleLogin,
        handleLogout
    }
