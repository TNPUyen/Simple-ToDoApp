import React from 'react';
import {AppBar, Avatar, Toolbar, Typography} from '@mui/material';

export default function AppNavBar(){
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
        return (
            // <AppBar position='fixed' style={{ background: '#003049' }}>
            //     <Toolbar variant='dense'>
            //         <Typography sx={{ flexGrow: 1 }}>TO DO APP</Typography>
            //         <Avatar sx={{bgcolor: `#FF5722`}}>U</Avatar>
            //     </Toolbar>
            // </AppBar>
            <div style={{ background: '#F2F3F7', marginLeft: '300px', padding: '10px 0'}}>
                <Toolbar variant='dense'>
                    <Typography >{userInfo.userName}</Typography>
                    <Avatar sx={{bgcolor: `#FF5722`}}>{userInfo.userName.substr(0,1).toUpperCase()}</Avatar>
                </Toolbar>
            </div>
        );
}