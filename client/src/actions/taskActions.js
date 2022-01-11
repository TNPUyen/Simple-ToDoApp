import {Component} from 'react';
import {addNewTask, getAllTask, updateTask, deleteTask} from '../services/taskService';

class Tasks extends Component{
    state = {tasks: [], currentTask: "", filterList: [], editValue: ""}

    async componentDidMount(){
        try {
            const {data} = await getAllTask();
            if(data != null){
                this.setState({tasks: data, filterList: data});
            }else{
                this.setState({tasks: [], filterList: []});
            }
        } catch (error) {
            console.log(error);
        }
    }

    handleChangeTask = ({currentTarget: input}) =>{
        this.setState({currentTask: input.value});
    }

    handleAddTask = async (currentCategory) =>{
        // currentCategory.preventDefault();
        const originalTasks = this.state.tasks;
        try {
            const newTask = {
                taskName: this.state.currentTask,
                category: currentCategory,
            }
            const {data} = await addNewTask(newTask);
            
            const tasks = originalTasks;
            tasks.push(data);
            this.setState({tasks, currentTask: "", filterList: tasks});
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
            tasks[index].taskName = this.state.editValue;
            this.setState({tasks});
            await updateTask(currentTask, {taskName: this.state.editValue,});
            const {data} = await getAllTask();
            this.setState({filterList: data});
        } catch (error) {
            this.setState({tasks: this.state.filterList});
            console.log(error);
        }
    }
    
    handleCheckTask = async (currentTask) => {
        const originalTasks = this.state.tasks;
        try {
            const tasks = [...originalTasks];
            const index = tasks.findIndex((task) => task._id === currentTask);
            tasks[index] = {...tasks[index]};
            tasks[index].completed = !tasks[index].completed;
            this.setState({tasks});
            await updateTask(currentTask, {completed: tasks[index].completed});
            const {data} = await getAllTask();
            this.setState({filterList: data});
        } catch (error) {
            this.setState({tasks: this.state.filterList});
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
            const {data} = await getAllTask();
            this.setState({filterList: data});
        } catch (error) {
            this.setState({tasks: originalTasks, filterList: originalTasks});
            console.log(error);
        }
    }
}

export default Tasks;