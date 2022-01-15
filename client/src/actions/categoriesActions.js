import {Component} from 'react';
import {addNewCategory, getAllCategories, updateCategory, deleteCategory } from '../services/categoriesService';
import { addNewCategoryTask, getCategoryTaskList, updateCategoryTask, deleteCategoryTask } from '../services/categoryTaskService';
import { updateTask} from '../services/taskService';

class CategoriesActions extends Component{
    _isMounted = false;
    state = {categories: [], currentCategory: "", categoryTasks: [], currentCategoryTask: ""}

    async componentDidMount(){
        try {
            this._isMounted = true;
            const {data} = await getAllCategories();
            if(this._isMounted){
                if(data != null){
                    this.setState({categories: data});
                }else{
                    this.setState({categories:[]});
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

    componentWillUnmount(){
        this._isMounted = false;
    }

    handleChangeCategory = ({currentTarget: input}) =>{
        this.setState({currentCategory: input.value});
    }
    

    handleAddCategory = async () =>{
        // currentCategory.preventDefault();
        const originalCategories = this.state.categories;
        try {
            const newCategory = {
                title: this.state.currentCategory,
            }
            const {data} = await addNewCategory(newCategory);
            const categories = originalCategories;
            categories.push(data);
            this.setState({categories, currentCategory: ""});
        } catch (error) {
            console.log(error);
        }
    }

    handleUpdateCategory = async () =>{
    }

    handleDeleteCategory = async (currentCategoryId) =>{
        const originalCategories = this.state.categories;
        try {
            const categories = originalCategories.filter(
                (category) => category._id !==currentCategoryId
            );
            await this.setState({categories});
            await deleteCategory(currentCategoryId);
        } catch (error) {
            this.setState({categories: originalCategories});
            console.log(error);
        }
    }

    // ######-------HANDLE ACTIONS FOR CATEGORY TASK -------#######
    handleChangeCategoryTask = ({currentTarget: input}) =>{
        this.setState({currentCategoryTask: input.value});
    }
    handleGetCategoryTaskList = async (categoryId)=>{
        try {
            const {data} = await getCategoryTaskList(categoryId);
            if(data != null){
                this.setState({categoryTasks: data});
            }else{
                this.setState({categoryTasks: []})
            }
        } catch (error) {
            console.log(error);
        }
    }
    handleAddCategoryTask = async (currentCategory) =>{
        // currentCategory.preventDefault();
        const originalCategoriesTask = this.state.categoryTasks;
        try {
            const newTask = {
                taskName: this.state.currentCategoryTask,
                category: currentCategory
            }
            const {data} = await addNewCategoryTask(newTask);
            const categoriesTasks = originalCategoriesTask;
            categoriesTasks.push(data);
            this.setState({ currentCategoryTask: "", categoriesTasks});
        } catch (error) {
            console.log(error);
        }
    }

    handleUpdateCategoryTask = async (currentTask) => {
        const originalCategoriesTask = this.state.categoryTasks;
        try {
            const categoryTasks = [...originalCategoriesTask];
            const index = categoryTasks.findIndex((task) => task._id === currentTask);
            categoryTasks[index] = {...categoryTasks[index]};
            categoryTasks[index].completed = !categoryTasks[index].completed;
            this.setState({categoryTasks});
            await updateCategoryTask(currentTask, {completed: categoryTasks[index].completed});
            // const {data} = await getAllTask();
            // this.setState({filterList: data});
        } catch (error) {
            console.log(error);
        }
    }

    handleDeleteCategoryTask = async (currentTask) => {
        console.log(currentTask)
        const originalCategoriesTask = this.state.categoryTasks;
        try {
            const categoryTasks = originalCategoriesTask.filter(
                (task) => task._id !==currentTask
            );
            this.setState({categoryTasks});
            await deleteCategoryTask(currentTask);
        } catch (error) {
            this.setState({categoryTasks: originalCategoriesTask});
            console.log(error);
        }
    }
}

export default CategoriesActions;