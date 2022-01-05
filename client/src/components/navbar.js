import React, { Component } from 'react';
import {AppBar, Avatar, Toolbar, Typography} from '@mui/material';

class AppNavBar extends Component{
    render(){
        return (
            <AppBar position='fixed' style={{ background: '#003049' }}>
                <Toolbar variant='dense'>
                    <Typography sx={{ flexGrow: 1 }}>TO DO APP</Typography>
                    <Avatar sx={{bgcolor: `#FF5722`}}>U</Avatar>
                </Toolbar>
            </AppBar>
        );
    };
}

export default AppNavBar;