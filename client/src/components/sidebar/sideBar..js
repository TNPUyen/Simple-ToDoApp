import React, { Component } from 'react';
import '../../styles/sidebar.css';
import {
    List, 
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Collapse,
} from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';


class Sidebar extends Component{
    state = {isOpenCategories: false, isOpenShared: false}
    handleOnClick = (id) => {
        if(id === 0){
            this.setState({isOpenCategories: !this.state.isOpenCategories});
        }else{
            this.setState({isOpenShared: !this.state.isOpenShared});
        }
    }
    render(){
        return (
            <div className='Sidebar'>
                <h1>.todoapp</h1>
                <List>
                    <ListItemButton>Today</ListItemButton>
                    <ListItemButton>Weekly Pinned</ListItemButton>
                    <ListItemButton>Pinned</ListItemButton>
                    <ListItemButton>Categories</ListItemButton>
                    {/* <ListItemButton onClick={() => this.handleOnClick(0)}>
                        Categories
                        {this.state.isOpenCategories ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={this.state.isOpenCategories} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }}>
                                Projects
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 4 }}>
                                Buy Food
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <AddOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Add New" />
                            </ListItemButton>
                        </List>
                    </Collapse> */}
                    <ListItemButton onClick={() => this.handleOnClick(1)}>
                        Shared
                        {this.state.isOpenShared ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                </List>
            </div>
        );
    }
};

export default Sidebar;