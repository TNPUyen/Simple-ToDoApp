import React from 'react';
import {Avatar, Toolbar, Typography} from '@mui/material';

export default function AppNavBar({user}){
        if(user.loggedIn ==true){
            return (
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