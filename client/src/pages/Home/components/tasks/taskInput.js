import React from 'react';
import { TextField, Dialog, DialogTitle, DialogContent, DialogActions, Button, Checkbox, Select} from '@mui/material';
import Tasks from '../../../../actions/taskActions';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

class TaskInput extends Tasks{
    state = {isOpen: false, currentTask: "",}
    handleClickOpen = () => {
        this.setState({isOpen: true});
    };
    
    handleClose = () => {
        this.setState({isOpen: false});
    };
    render(){
        const open = this.state.isOpen;
        return(
            <div>
                <button type="submit" id='btn-addNew' onClick={this.handleClickOpen}><AddOutlinedIcon/></button>
                <Dialog open={open} onClose={this.handleClose}>
                    <DialogTitle>Add new task</DialogTitle>
                    <form autoComplete="off" onSubmit={()=> this.handleAddTask("", true)}>
                        <DialogContent>
                            <TextField label="What to do?" name="todos" id="standard-size-small" size="small" fullWidth variant="standard" value={this.state.currentTask} required={true} onChange={this.handleChangeTask} className="input-newTask"/>
                            {/* <div className='checkbox-today'>
                                <Checkbox></Checkbox>
                                <p>Today</p>
                            </div>
                            <div>
                                Category: <Select></Select>
                            </div> */}
                            <DialogActions>
                                <Button onClick={this.handleClose}>Cancel</Button>
                                <Button onClick={this.handleClose} type='submit'>Add New</Button>
                        </DialogActions>        
                        </DialogContent>
                       
                    </form>
                </Dialog>
            </div>
        );
    }
};

export default TaskInput;
