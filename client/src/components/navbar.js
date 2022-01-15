import React, { useContext, useEffect } from 'react';
import {AppBar, Avatar, Toolbar, Typography} from '@mui/material';
import { UserContext } from '../helpers/userContext';

export default function AppNavBar({user}){
    console.log(user.loggedIn)
    // const userInfo = {};
    // useEffect(() => {
    //     userInfo = JSON.parse(user.info)
    // }, [])
    // const userInfo = JSON.parse(localStorage.getItem('userInfo'));
        if(user.loggedIn ==true){
            return (
                // <AppBar position='fixed' style={{ background: '#003049' }}>
                //     <Toolbar variant='dense'>
                //         <Typography sx={{ flexGrow: 1 }}>TO DO APP</Typography>
                //         <Avatar sx={{bgcolor: `#FF5722`}}>U</Avatar>
                //     </Toolbar>
                // </AppBar>
                <div style={{ background: '#F2F3F7', padding: '10px 0'}}>
                    <Toolbar variant='dense'>
                        <Typography >{user.info.userName}</Typography>
                        <Avatar sx={{bgcolor: `#FF5722`}}>{user.info.userName.substr(0,1).toUpperCase()}</Avatar>
                    </Toolbar>
                </div>
            );
        }else{
            return(
                <div style={{height:0}}></div>
            );
        }
}