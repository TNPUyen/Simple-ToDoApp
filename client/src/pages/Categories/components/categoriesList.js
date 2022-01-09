import React, { Component } from 'react';
import { Grid } from '@mui/material';
import CategoryItem from './categoryItem';
import CategoriesActions from '../../../actions/categoriesActions';
// import CategoryTaskActions from '../../../actions/categoryTaskActions';

export default class CategoriesList extends CategoriesActions {
    render() {
        const {categories} = this.state;
        // if(categories.length >0){
            return (
                <Grid container spacing={2} className='grid-categories'>
                    {categories.map((category) => (
                        <CategoryItem category={category} key={category._id} />
                    ))}
                    {/* <button onClick={() =>{ this.handleAddCategoryTask("this is dmoe")}}>hi</button> */}
                </Grid>
            )
        // }else{
            // return(
                // <h1>No categories</h1>
            // );
        // }
    }
}
