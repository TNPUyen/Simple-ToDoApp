import {Component} from 'react';
import {addNewTask, getAllTask, getTodayTask, updateTask, deleteTask} from '../services/taskService';

class Tasks extends Component{
    _isMounted = false;
    state = {tasks: [], currentTask: "", filterList: [], editValue: ""}

    async componentDidMount(){
        try {
            this._isMounted = true;
            const {data} = await getTodayTask();
            if(this._isMounted){
                if(data != null){
                    this.setState({tasks: data, filterList: data});
                }else{
                    this.setState({tasks: [], filterList: []});
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

    componentWillUnmount(){
        this._isMounted = false;
    }
    

    handleChangeTask = ({currentTarget: input}) =>{
        this.setState({currentTask: input.value});
    }

    handleGetTodayTask = async () => {
        try {
            const tasks = await getTodayTask();
            this.setState({tasks});
        } catch (error) {
            console.log(error);
        }
    }

    handleAddTask = async (currentCategory, today) =>{
        // currentCategory.preventDefault();
        const originalTasks = this.state.tasks;
        try {
            const newTask = {
                taskName: this.state.currentTask,
                category: currentCategory,
                today: today
            }
            const {data} = await addNewTask(newTask);
            console.log(data)
        } catch (error) {
            console.log(error);
        }
    }
    handleUpdateTask = async (currentTask, today) => {
        const originalTasks = this.state.tasks;
        try {
            const tasks = [...originalTasks];
            const index = tasks.findIndex((task) => task._id === currentTask);
            tasks[index] = {...tasks[index]};
            tasks[index].taskName = this.state.editValue;
            this.setState({tasks});
            await updateTask(currentTask, {taskName: this.state.editValue,});
            if(today){
                const {data} = await getTodayTask();
                this.setState({filterList: data});
            }else{
                const {data} = await getAllTask();
                this.setState({filterList: data});
            }
        } catch (error) {
            this.setState({tasks: this.state.filterList});
            console.log(error);
        }
    }
    
    handleCheckTask = async (currentTask, today) => {
        const originalTasks = this.state.tasks;
        try {
            
            console.log(today)
            const tasks = [...originalTasks];
            const index = tasks.findIndex((task) => task._id === currentTask);
            tasks[index] = {...tasks[index]};
            tasks[index].completed = !tasks[index].completed;
            this.setState({tasks});
            await updateTask(currentTask, {completed: tasks[index].completed});
            if(today){
                const {data} = await getTodayTask();
                this.setState({filterList: data});
            }else{
                const {data} = await getAllTask();
                this.setState({filterList: data});
            }
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