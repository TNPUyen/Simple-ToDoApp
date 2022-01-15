
import React, {useContext, useState} from 'react';
import { Button } from '@mui/material';
import { UserContext } from '../../helpers/userContext';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthAction } from '../../actions/authAction';

export default function Login({isAuth}) {

    const { login } = useContext(UserContext);
    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    
    const location = useLocation();
    const Login = async (userName, password) => {
        await AuthAction.handleLogin(userName, password).then(
            (data) => {
                console.log(data)
                if(data.message === 'Login successfully!'){
                    // navigate("/mytodo/today");
                    // login(data.user).then(() =>{
                    //     navigate("mytodo/today");
                    //     // window.location.reload();
                    // });
                    isAuth();
                    navigate("mytodo/today");
                }
            }
        );
    }

    return (
        <div>
            {/* <p >{`Logged In: ${value}`}</p> */}
            <form autoComplete="off">
                <input placeholder='username'  name='userName' onChange={(e) => {setUserName(e.target.value)}}/>
                <input placeholder='password'  name='password' onChange={(e) => {setPassword(e.target.value)}}/>
                <Button className='btn-login' onClick={() => Login(userName, password)}>Login</Button>
                <a>Create account</a>
            </form>
        </div>
    )
}

