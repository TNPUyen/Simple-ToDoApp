import React from 'react';
import { TextField, Dialog, Button, List, DialogActions, Checkbox} from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import CloseIcon from '@mui/icons-material/Close';
import TaskItem from '../../../Home/components/tasks/taskItem';
import CategoriesActions from '../../../../actions/categoriesActions';
import Tooltip from '@mui/material/Tooltip';
import '../../../../styles/dashboard.css';
import TaskFooter from '../../../Home/components/tasks/taskFooter';

export default class CategoryTaskList extends CategoriesActions {
    state = {isOpen: false, currentCategoryTask: "", categoryTasks: this.props.categoryTasks, checkAll: false,}

    onClickOpenCategory = async (category) => {
        this.setState({isOpen: true});  
    }
    handleClose = () => {
        this.setState({isOpen: false});
    };

    handleSubmit = async (categoryId) => {
        await this.handleAddCategoryTask(categoryId);
        this.setState({isOpen: false});
    }

    handleCheckAll = () => {
        const categoryTasks = this.state.categoryTasks;
        const listTasks = [...categoryTasks];
        listTasks.forEach(task => {
            task.completed = !this.state.checkAll;
        });
        this.setState({categoryTasks: listTasks, checkAll: !this.state.checkAll});
    }

    handleOnDelete = () => {
        const categoryTasks = this.state.categoryTasks;
        const newTasks = categoryTasks.filter(task => {
            if(task.completed === true){
                this.handleDeleteCategoryTask(task._id);
            }
            return task.completed === false
        });
        this.setState({categoryTasks: newTasks});
    }

    totalTaskToDo = (categoryTasks) =>{
        const newTaskList = categoryTasks.filter((task) => {
            return task.completed === false;
        });
        // this.setState({totalTaskToDo: newTaskList.length});
        return newTaskList.length;
    }

    render() {
        // this.state.categoryTasks = this.props.categoryTasks;
        const open = this.state.isOpen;
        const categoryTasks = this.state.categoryTasks;

        const taskToDo = this.totalTaskToDo(this.state.categoryTasks);

        const switchComplete = id => this.handleUpdateCategoryTask(id, false)

        return ( 
            <div className='categoryTask-content'>
                <Tooltip title="New task">
                    <button onClick={() => this.onClickOpenCategory(this.props.category)} className='btn-addNewCategoryTask'><AddOutlinedIcon /></button>
                </Tooltip>
                <Dialog open={open} maxWidth="xs" fullWidth>
                    <div className='categoryTask-header'>
                        <h3>Add New Task</h3>
                        <Button
                            edge="start"
                            color="inherit"
                            onClick={this.handleClose}
                            aria-label="close"
                            >
                            <CloseIcon />
                        </Button>
                    </div>
                    <TextField label="What to do?" name="todos" id="standard-size-small" size="small" fullWidth variant="standard" value={this.state.currentCategoryTask} required={true} onChange={this.handleChangeCategoryTask} className="input-newTask"/>
                    <DialogActions>
                        <button type='submit' onClick={() => this.handleSubmit(this.props.category._id)}><AddOutlinedIcon /></button>
                    </DialogActions>
                </Dialog>
                { categoryTasks != null && 
                    <List sx={{
                        width: '100%',
                        bgcolor: 'background.paper',
                        position: 'relative',
                        overflow: 'auto',
                        maxHeight: 350,
                        marginTop: '-50px',
                        '& ul': { padding: 0 },
                    }}>
                        {categoryTasks.map((categoryTask) => (
                            <TaskItem task ={categoryTask} key={categoryTask._id} checkComplete={switchComplete} today={false}/>
                        ))}
                    </List>
                }
                { categoryTasks.length === 0 && 
                    <h3>No task to do!!</h3>
                }
                <TaskFooter handleCheckAll = {this.handleCheckAll} handleDeleteTask = {this.handleOnDelete} taskToDo = {taskToDo}/>
            </div>
        )
    }
}
