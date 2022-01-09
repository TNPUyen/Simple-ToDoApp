import React, { Component } from 'react';
import {AppBar, Avatar, Toolbar, Typography} from '@mui/material';

class AppNavBar extends Component{
    render(){
        return (
            // <AppBar position='fixed' style={{ background: '#003049' }}>
            //     <Toolbar variant='dense'>
            //         <Typography sx={{ flexGrow: 1 }}>TO DO APP</Typography>
            //         <Avatar sx={{bgcolor: `#FF5722`}}>U</Avatar>
            //     </Toolbar>
            // </AppBar>
            <div style={{ background: '#F2F3F7', marginLeft: '300px', padding: '10px 0'}}>
                <Toolbar variant='dense'>
                    <Typography >I am a tester</Typography>
                    <Avatar sx={{bgcolor: `#FF5722`}}>U</Avatar>
                </Toolbar>
            </div>
        );
    };
}

export default AppNavBar;