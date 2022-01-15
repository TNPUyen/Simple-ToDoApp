
import React, { useState} from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { AuthAction } from '../../actions/authAction';

export default function Login({isAuth}) {
    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const Login = async (userName, password) => {
        await AuthAction.handleLogin(userName, password).then(
            (data) => {
                if(data.message === 'Login successfully!'){
                    isAuth();
                    navigate("mytodo/today");
                }
            }
        );
    }

    return (
        <div>
            <form autoComplete="off">
                <input placeholder='username'  name='userName' onChange={(e) => {setUserName(e.target.value)}}/>
                <input placeholder='password'  name='password' onChange={(e) => {setPassword(e.target.value)}}/>
                <Button className='btn-login' onClick={() => Login(userName, password)}>Login</Button>
                <a>Create account</a>
            </form>
        </div>
    )
}

