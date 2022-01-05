import React from 'react';
import Tasks from '../../../../actions/taskActions';
import {
    Checkbox, List,
  } from '@mui/material';
import '../../../../styles/task.css';
import TaskItem from './taskItem';

class TaskList extends Tasks{
    state = {tasks: [], checkAll: false};
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
        const listTasks = [...tasks];
        const newTasks = listTasks.filter(task => {
            if(task.completed === true){
                this.handleDeleteTask(task._id);
            }
            return task.completed === false
        });
        this.setState({tasks: newTasks});
    }

    render(){
        const {tasks} = this.state;
        const switchComplete = id => this.handleUpdateTask(id)
        return(
            <div>
                <List sx={{
                        width: '100%',
                        bgcolor: 'background.paper',
                        position: 'relative',
                        overflow: 'auto',
                        maxHeight: 300,
                        '& ul': { padding: 0 },
                    }}>
                    {tasks.map((task) => (
                        <TaskItem task ={task} key={task._id} checkComplete={switchComplete}/>
                    ))}
                </List>
                <div className="footer-row">
                    <label>
                        <Checkbox id="all" name="all" onClick={() => this.handleCheckAll() }></Checkbox>
                        All
                    </label>
                    <p>{tasks.length} to do</p>
                    <button id="Delete" onClick={this.handleOnDelete}>Delete</button>
                </div>
            </div>
         );
    };
}

export default TaskList;

