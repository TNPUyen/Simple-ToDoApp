import React, {Component} from 'react';
import {addNewCategory, getAllCategories, updateCategory, deleteCategory } from '../services/categoriesService';

class CategoriesActions extends Component{
    state = {categories: [], currentCategory: ""}

    async componentDidMount(){
        try {
            const {data} = await getAllCategories();
            // if(data != null){
                this.setState({categories: data});
            // }else{
                // this.setState({categories:[]});
            // }
        } catch (error) {
            console.log(error);
        }
    }

    handleChangeCategory = ({currentTarget: input}) =>{
        console.log(input.value)
        this.setState({currentCategory: input.value});
    }

    handleAddCategory = async (currentCategory) =>{
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

}

export default CategoriesActions;