import {addNewCategory, getAllCategories, updateCategory, deleteCategory } from '../services/categoriesService';
import { addNewCategoryTask, getCategoryTaskList, updateCategoryTask, deleteCategoryTask } from '../services/categoryTaskService';


    // handleChangeCategory = ({currentTarget: input}) =>{
    //     this.setState({currentCategory: input.value});
    // }
    const getCategoriesList = async (userId) => {
        try {
            const data = await getAllCategories(userId);
            // if(this._isMounted){
                if(data != []){
                    console.log(userId)
                    return data.categories;
                }else{
                    return null;
                }
            // }
        } catch (error) {
            console.log(error);
        }
    }
    

    const handleAddCategory = async (userId, currentCategory, originalCategories) =>{
        // currentCategory.preventDefault();
        // const tempOriginalCategories = originalCategories;
        console.log(userId)
        try {
            const newCategory = {
                title: currentCategory,
                userId: userId
            }
            const data = await addNewCategory(newCategory);
            const categories = originalCategories;
            categories.push(data);
            return categories;
        } catch (error) {
            return originalCategories;
        }
    }

    const handleUpdateCategory = async () =>{
    }

    const handleDeleteCategory = async (currentCategoryId) =>{
        const originalCategories = this.state.categories;
        try {
            const categories = originalCategories.filter(
                (category) => category._id !==currentCategoryId
            );
            await deleteCategory(currentCategoryId);
            return categories;
        } catch (error) {
            return originalCategories;
        }
    }

    // ######-------HANDLE ACTIONS FOR CATEGORY TASK -------#######
    // const handleChangeCategoryTask = ({currentTarget: input}) =>{
    //     this.setState({currentCategoryTask: input.value});
    // }
    const handleGetCategoryTaskList = async (categoryId)=>{
        try {
            const data = await getCategoryTaskList(categoryId);
            if(data != null){
                return data.categoryTaskList;
            }else{
                return [];
            }
        } catch (error) {
            console.log(error);
        }
    }
    const handleAddCategoryTask = async (userInfo, newTaskName, currentCategory, categoriesTasks) =>{
        // currentCategory.preventDefault();
        // const originalCategoriesTask = this.state.categoryTasks;
        try {
            const newTask = {
                taskName: newTaskName,
                userId: userInfo,
                category: currentCategory
            }
            const {data} = await addNewCategoryTask(newTask);
            const categoriesTasks = categoriesTasks;
            categoriesTasks.push(data);
            return categoriesTasks;
        } catch (error) {
            return categoriesTasks;
        }
    }

    const handleUpdateCategoryTask = async (currentTask) => {
        const originalCategoriesTask = this.state.categoryTasks;
        try {
            const categoryTasks = [...originalCategoriesTask];
            const index = categoryTasks.findIndex((task) => task._id === currentTask);
            categoryTasks[index] = {...categoryTasks[index]};
            categoryTasks[index].completed = !categoryTasks[index].completed;
            await updateCategoryTask(currentTask, {completed: categoryTasks[index].completed});
            return categoryTasks;
        } catch (error) {
            console.log(error);
        }
    }

    const handleDeleteCategoryTask = async (currentTask) => {
        const originalCategoriesTask = this.state.categoryTasks;
        try {
            const categoryTasks = originalCategoriesTask.filter(
                (task) => task._id !==currentTask
            );
            await deleteCategoryTask(currentTask);
            return categoryTasks;
        } catch (error) {
            return originalCategoriesTask;
        }
    }


export const CategoriesActions = {
    getCategoriesList,
    handleAddCategory,
    handleDeleteCategory,
    handleGetCategoryTaskList,
    handleAddCategoryTask,
    handleUpdateCategoryTask,
    handleDeleteCategoryTask
};