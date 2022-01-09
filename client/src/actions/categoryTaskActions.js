import React, { Component } from 'react';
import { addNewCategoryTask } from '../services/categoryTaskService';


export default class CategoryTaskActions extends Component {
    state = {categoryTasks: [], currentCategoryTask: ""}
    // async componentDidMount(){
    //     try {
    //         const {data} = await getAllTask();
    //         if(data != null){
    //             this.setState({tasks: data, filterList: data});
    //         }else{
    //             this.setState({tasks: [], filterList: []});
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    handleChangeCategoryTask = ({currentTarget: input}) =>{
        console.log(input.value);
        this.setState({currentCategoryTask: input.value});
    }

    handleAddCategoryTask = async (currentCategory) =>{
        // currentCategory.preventDefault();
        // const originalTasks = this.state.tasks;
        try {
            const newTask = {
                taskName: this.state.currentCategoryTask,
                category: currentCategory
            }
            const {data} = await addNewCategoryTask(newTask);
            
            // const tasks = originalTasks;
            // tasks.push(data);
            this.setState({ currentTask: "",});
        } catch (error) {
            console.log(error);
        }
    }

}
