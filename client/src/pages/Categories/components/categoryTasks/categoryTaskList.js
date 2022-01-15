import React, {useEffect, useState} from 'react';
import { TextField, Dialog, Button, List, DialogActions, Checkbox} from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import CloseIcon from '@mui/icons-material/Close';
import TaskItem from '../../../Home/components/tasks/taskItem';
import {CategoriesActions} from '../../../../actions/categoriesActions';
import Tooltip from '@mui/material/Tooltip';
import '../../../../styles/dashboard.css';
import TaskFooter from '../../../Home/components/tasks/taskFooter';

export default function CategoryTaskList({user, category, categoryTasks}) {
    // state = {isOpen: false, currentCategoryTask: "", categoryTasks: this.props.categoryTasks, checkAll: false,
    const [isOpen, setIsOpen] = useState(false);
    const [checkAll, setCheckAll] = useState(false);
    const [value, setValue] = useState("");
    const [categoryTasksList, setCategoryTasksList] = useState(null);
    const [totalTaskToDo, setTotalTaskToDo] = useState(0);

    const onClickOpenCategory = async (category) => {
        setIsOpen(true);
    }
    const handleClose = () => {
        setIsOpen(false);
    };

    const handleSubmit = async (categoryId) => {
        await CategoriesActions.handleAddCategoryTask(user._id, categoryId);
        setIsOpen(false);
    }

    const handleCheckAll = () => {
        const tempCategoryTasks = categoryTasks;
        const listTasks = [...tempCategoryTasks];
        listTasks.forEach(task => {
            task.completed = !checkAll;
        });
        setCategoryTasksList(listTasks);
        setCheckAll(!checkAll);
        // this.setState({categoryTasks: listTasks, checkAll: !this.state.checkAll});
    }

    const handleOnDelete = () => {
        const tempCategoryTasks = categoryTasks;
        const newTasks = categoryTasks.filter(task => {
            if(task.completed === true){
                CategoriesActions.handleDeleteCategoryTask(task._id);
            }
            return task.completed === false
        });
        setCategoryTasksList(newTasks);
    }

    const countTotalTaskToDo = (tempCategoryTasks) =>{
        var newTaskList = [];
       if(tempCategoryTasks != null){
        newTaskList = tempCategoryTasks.filter((task) => {
            return task.completed === false;
        });
        setTotalTaskToDo(newTaskList.length);
       }
        // this.setState({totalTaskToDo: newTaskList.length});
        return newTaskList.length;
    }
    useEffect(() => {
        const taskToDo = countTotalTaskToDo(categoryTasks);
        setTotalTaskToDo(taskToDo)
        
    }, [])
    // render() {
    //     // this.state.categoryTasks = this.props.categoryTasks;
    //     const open = this.state.isOpen;
    //     const categoryTasks = this.state.categoryTasks;
console.log(categoryTasks)

        const switchComplete = id => this.handleUpdateCategoryTask(id, false)

        return ( 
            <div className='categoryTask-content'>
                <Tooltip title="New task">
                    <button onClick={() => onClickOpenCategory(category)} className='btn-addNewCategoryTask'><AddOutlinedIcon /></button>
                </Tooltip>
                <Dialog open={isOpen} maxWidth="xs" fullWidth>
                    <div className='categoryTask-header'>
                        <h3>Add New Task</h3>
                        <Button
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                            >
                            <CloseIcon />
                        </Button>
                    </div>
                    <TextField label="What to do?" name="todos" id="standard-size-small" size="small" fullWidth variant="standard" value={value} required={true} onChange={e => setValue(e.target.value)} className="input-newTask"/>
                    <DialogActions>
                        <button type='submit' onClick={() => handleSubmit(category._id)}><AddOutlinedIcon /></button>
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
                { (categoryTasks.length === 0 || categoryTasks == null) && 
                    <h3>No task to do!!</h3>
                }
                <TaskFooter handleCheckAll = {handleCheckAll} handleDeleteTask = {handleOnDelete} taskToDo = {totalTaskToDo}/>
            </div>
        )
    // }
}
