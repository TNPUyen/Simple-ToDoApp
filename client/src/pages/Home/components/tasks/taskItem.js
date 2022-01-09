import React from 'react';
import { Checkbox, ListItem, TextField } from "@mui/material";
import Tasks from '../../../../actions/taskActions';


// export default function TaskItem({task, checkComplete}) {
//     return (
//         <div className='flex task_container'>
//             <label className={task.completed?'task active':'task'}>
//                 <Checkbox checked={task.completed} onClick={() => checkComplete(task._id)}></Checkbox>
//                 {task.taskName}
//             </label>
//             <button className='btn-edit' disabled={task.completed}>Edit</button>
//         </div>
//     )
// }

class TaskItem extends Tasks{
    state = {onEdit: false, editValue: ""};
    handleOnEdit = (task) => {
       this.setState({onEdit: !this.state.onEdit, editValue: task.taskName});
    }

    handleOnSave = (task) => {
        this.setState({onEdit: !this.state.onEdit});
        task.taskName = this.state.editValue;
        this.handleUpdateTask(task._id, task);
     }
    handleOnChange = (value) => {
        this.setState({editValue: value})
    } 
    
    render(){
        const task = this.props.task;
        const checkComplete = this.props.checkComplete;
        if(this.state.onEdit){
            return (
                <ListItem className='flex task_container'>
                    <TextField size='small' inputProps={{style: {fontSize: 17.5}}} className='task' value={this.state.editValue} name='editValue' onChange={(e) => this.handleOnChange(e.target.value)}/>
                    <button className='btn-update' disabled={task.completed} onClick={() => this.handleOnSave(task)}>Save</button>
                </ListItem>
            )
        }else{
            return (
                <ListItem className='flex task_container'>
                    <label className={task.completed?'task active':'task'}>
                        <Checkbox checked={task.completed} size="small" onClick={() => checkComplete(task._id)}></Checkbox>
                        {task.taskName}
                    </label>
                    <button className='btn-edit' disabled={task.completed} onClick={() => this.handleOnEdit(task)}>Edit</button>
                </ListItem>
            )
        }
    };
};

export default TaskItem;
