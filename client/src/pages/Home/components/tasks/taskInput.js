import React from 'react';
import { TextField } from '@mui/material';
import Tasks from '../../../../actions/taskActions';


class TaskInput extends Tasks{

    render(){
        return(
            <form autoComplete="off" onSubmit={()=> this.handleAddTask(this.props.categoryId)}>
                <TextField placeholder="What to do?" name="todos" id="todos" size="small" variant="standard" value={this.state.currentTask} required={true} onChange={this.handleChangeTask} className="input-newTask"/>          
                <button type="submit">Create</button>
            </form>
        );
    }
};

export default TaskInput;
