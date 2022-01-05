import React, {Component} from 'react';
import {addNewCategory, getAllCategories, updateCategory, deleteCategory } from '../services/categoriesService';

class Categories extends Component{
    state = {categories: [], currentCategory: ""}

    async componentDidMount(){
        try {
            const {data} = await getAllCategories();
            this.setState({categories: data});
        } catch (error) {
            console.log(error);
        }
    }

    handleChangeCategory = ({currentTarget: input}) =>{
        this.setState({currentCategory: input.value});
    }

    handleAddCategory = async (e) =>{
        e.preventDefault();
        const originalCategories = this.state.categories;
        try {
            const {data} = await addNewCategory({task: this.state.currentCategory});
            const categories = originalCategories;
            categories.push(data);
            this.setState({categories, currentCategory: ""});
        } catch (error) {
            console.log(error);
        }
    }  
}

export default Categories;