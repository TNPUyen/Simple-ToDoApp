import React, { Component } from "react";
import { Grid, Paper, styled} from "@mui/material";
import '../../styles/dashboard.css';
import '../../App.css';

import TaskList from './components/tasks/taskList';
import TaskInput from './components/tasks/taskInput';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(3),
    // textAlign: 'center',
    // color: theme.palette.text.secondary,
  }));

export default function Dashboard() {
    return (
        <div className="container">
                <Grid container spacing={2} className="today-content">
                    <Grid item lg={8} xs={12} className="layout-padding">
                        <div className="header">
                            <h1>Today's tasks</h1>
                        </div>
                        <Item elevation={8}>
                            <TaskInput categoryId = "today"/>
                            <TaskList />
                        </Item>
                    </Grid>
                    <Grid item lg={4} xs={12} className="layout-padding">
                        <div className="header right-side-container">
                            <h2>Weekly pinned</h2>
                            <h5>View all</h5>
                        </div>
                        <Item elevation={8}><h1>im right side</h1></Item>
                        <div className="header">
                            <h2>Calendar</h2>
                        </div>  
                        <Item elevation={8}><h1>im right side</h1></Item>   
                    </Grid>
                </Grid>
            </div>
    )
}
