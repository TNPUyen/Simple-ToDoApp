import React, {Component} from 'react';
import {addNewTask, getAllTask, updateTask, deleteTask} from '../services/taskService';

class Tasks extends Component{
    state = {tasks: [], currentTask: "",}

    async componentDidMount(){
        try {
            const {data} = await getAllTask();
            this.setState({tasks: data});
        } catch (error) {
            console.log(error);
        }
    }

    handleChangeTask = ({currentTarget: input}) =>{
        this.setState({currentTask: input.value});
    }

    handleAddTask = async (currentCategory) =>{
        // e.preventDefault();
        const originalTasks = this.state.tasks;
        try {
            const newTask = {
                taskName: this.state.currentTask,
                category: currentCategory,

            }
            const {data} = await addNewTask(newTask);
            const tasks = originalTasks;
            tasks.push(data);
            this.setState({tasks, currentTask: ""});
        } catch (error) {
            console.log(error);
        }
    }
    handleUpdateTask = async (currentTask) => {
        const originalTasks = this.state.tasks;
        try {
            const tasks = [...originalTasks];
            const index = tasks.findIndex((task) => task._id === currentTask);
            tasks[index] = {...tasks[index]};
            tasks[index].completed = !tasks[index].completed;
            this.setState({tasks});
            await updateTask(currentTask, {completed: tasks[index].completed});
        } catch (error) {
            this.setState({tasks: originalTasks});
            console.log(error);
        }
    }

    handleDeleteTask = async(currentTask) => {
        const originalTasks = this.state.tasks;
        try {
            const tasks = originalTasks.filter(
                (task) => task._id !==currentTask
            );
            this.setState({tasks});
            await deleteTask(currentTask);
        } catch (error) {
            this.setState({tasks: originalTasks});
            console.log(error);
        }
    }
}

export default Tasks;