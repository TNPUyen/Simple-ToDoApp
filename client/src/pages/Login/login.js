
import React, {useContext, useState} from 'react';
import { Button } from '@mui/material';
import { UserContext } from '../../helpers/userContext';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthAction } from '../../actions/authAction';

export default function Login() {
    // const [userName, setUserName] = useState[null];
    // const [password, setPassword] = useState[null];
    // function handleOnChangeUserName({currentTarget: input}){
    //     setUserName[input.value];
    // }

    // function handleOnChangePassword ({currentTarget: input}){
    //     setPassword[input.value];
    // }
    const { login } = useContext(UserContext);
    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    // const [ user, setUser ] = useState({loggedIn: false});
    // const [isLogIn, setIsLogIn] = useState(false);
    // const navigate = useNavigate();
    // const location = useLocation();
    // function Login(e){
    //     e.preventDefault();
    //     // if (user.loggedIn) return;
    //     setUser({loggedIn:true});
    //     console.log(user.loggedIn)
    //     // navigate('/mytodo/today');
    //     // window.location.reload();
    //     // if (location.state?.from) {
    //     //   navigate(location.state.from);
    //     // }
    // }

    // if(user.loggedIn){

    //     console.log(user.loggedIn)
    //     return <Navigate to={'/mytodo/today'}/>
    // }

    const Login = async (userName, password) => {
        await AuthAction.handleLogin(userName, password).then(
            (data) => {
                console.log(data)
                if(data.message === 'Login successfully!'){
                    // navigate("/mytodo/today");
                    login(userName, password);
                    <Navigate to={'/mytodo/today'}/>;
                    window.location.reload();
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

