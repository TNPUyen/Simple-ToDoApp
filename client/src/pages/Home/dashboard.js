import React, { Component } from "react";
import { Paper } from "@mui/material";
import '../../styles/dashboard.css';
import TaskList from './components/tasks/taskList';
import TaskInput from './components/tasks/taskInput';


class Dashboard extends Component{
    state = {categories: [], currentCategory: ""}

    render(){
        return (
            <div className="dashboard-container">
                <div>DashBoard</div>
                <Paper className="category-container" elevation={5}>
                    {/* <div className="heading-row"> */}
                        <h1>TO DO LIST</h1>
                        {/* <button id="delete-category">X</button> */}
                    {/* </div> */}
                    <TaskInput categoryId = "Buy food"/>
                    <TaskList />
                </Paper>
            </div>
        );
    };
};

export default Dashboard;