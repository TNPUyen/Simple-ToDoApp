import React, { Component } from 'react'
import {addNewUser, login} from '../services/authService';

// export default function AuthAction () {
    // state = {userName: "", password: "", message: ""}

    // export function handleOnChangeUserName ({currentTarget: input}){
    //     this.setState({userName: input.value});
    // }

    // export function handleOnChangePassword ({currentTarget: input}){
    //     this.setState({password: input.value});
    // }

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
        const userInfo = JSON.parse(localStorage.getItem('userInfo'));

        console.log(userInfo)
        localStorage.removeItem('userInfo');
    }

    export const AuthAction = {
        handleLogin,
        handleLogout
    }
// }
