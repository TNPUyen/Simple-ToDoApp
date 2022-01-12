import React from 'react';
import Tasks from '../../../../actions/taskActions';
import {
    Checkbox, List, IconButton
  } from '@mui/material';
import '../../../../styles/task.css';
import TaskItem from './taskItem';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import TaskFooter from './taskFooter';


class TaskList extends Tasks{
    state = {tasks: [], checkAll: false, currentButton: 0, totalTaskToDo: 0, filterListCheck: 0, textRender: 'No task to do today!'};

    handleCheckAll = () => {
        const tasks = this.state.tasks;
        const listTasks = [...tasks];
        listTasks.forEach(task => {
            task.completed = !this.state.checkAll;
        });
        this.setState({tasks: listTasks, checkAll: !this.state.checkAll});
    }

    handleOnDelete = () => {
        const tasks = this.state.tasks;
        const newTasks = tasks.filter(task => {
            if(task.completed === true){
                this.handleDeleteTask(task._id);
            }
            return task.completed === false
        });
        this.setState({tasks: newTasks});
    }
    handleOnClick = async (id) => {
        this.setState({currentButton: id});
        this.state.tasks = this.state.filterList;
        const newTaskList = await this.state.tasks.filter((task) => {
            if(id === 1){
                this.setState({filterListCheck: 1})
                return task.completed === false;
            }else if(id === 2){
                this.setState({filterListCheck: 2})
                return task.completed === true;
            }else{
                return task;
            };
        });
        this.setState({tasks: newTaskList});
    }

    totalTaskToDo = () =>{
        const newTaskList = this.state.tasks.filter((task) => {
            return task.completed === false;
        });
        // this.setState({totalTaskToDo: newTaskList.length});
        return newTaskList.length;
    }

    render(){
        const {tasks} = this.state;
        const taskToDo = this.totalTaskToDo();
        const switchComplete = id => this.handleCheckTask(id, true)
        if(tasks.length > 0){
            return(
                <div>
                    <div>
                        <IconButton color={this.state.currentButton === 0 ? "primary" : "default" } onClick={() => this.handleOnClick(0)}><FormatListBulletedOutlinedIcon color='#ffd261'/></IconButton>
                        <IconButton color={this.state.currentButton === 1 ? "primary" : "default" } onClick={() => this.handleOnClick(1)}><CircleOutlinedIcon/></IconButton>
                        <IconButton color={this.state.currentButton === 2 ? "primary" : "default" } onClick={() => this.handleOnClick(2)}><CheckOutlinedIcon/></IconButton>
                    </div>
                    <List sx={{
                            width: '100%',
                            bgcolor: 'background.paper',
                            position: 'relative',
                            overflow: 'auto',
                            maxHeight: 350,
                            '& ul': { padding: 0 },
                        }}>
                        {tasks.map((task) => (
                            <TaskItem task ={task} key={task._id} checkComplete={switchComplete} today={true}/>
                        ))}
                    </List>
                    <TaskFooter handleCheckAll = {this.handleCheckAll} handleDeleteTask = {this.handleOnDelete} taskToDo = {taskToDo}/>
                </div>
             );
        }else{
            return(
                <div>
                    <div>
                        <IconButton color={this.state.currentButton === 0 ? "primary" : "default" } onClick={() => this.handleOnClick(0)}><FormatListBulletedOutlinedIcon color='#ffd261'/></IconButton>
                        <IconButton color={this.state.currentButton === 1 ? "primary" : "default" } onClick={() => this.handleOnClick(1)}><CircleOutlinedIcon/></IconButton>
                        <IconButton color={this.state.currentButton === 2 ? "primary" : "default" } onClick={() => this.handleOnClick(2)}><CheckOutlinedIcon/></IconButton>
                    </div>
                    {this.state.filterListCheck == 0 || this.state.filterListCheck == 1 && (
                        <h1>No task to do today!</h1>
                    )}
                    {this.state.filterListCheck == 2 && (
                        <h1>No task done today!</h1>
                    )}
                    <TaskFooter handleCheckAll = {this.handleCheckAll} handleDeleteTask = {this.handleOnDelete} taskToDo = {taskToDo}/>
                </div>
            );
        }
    };
}

export default TaskList;

