// import React from 'react';
// import { Grid } from '@mui/material';
// import CategoryItem from './categoryItem';
// import CategoriesActions from '../../../actions/categoriesActions';

// export default class CategoriesList extends CategoriesActions {
//     handleOnChange = (categoryId) => {
//         this.handleDeleteCategory(categoryId);
//     }
//     render() {
//         const {categories} = this.state;
//         if(categories.length >0){
//             return (
//                 <Grid container spacing={2} className='grid-categories'>
//                     {categories.map((category) => (
//                         <CategoryItem category={category} key={category._id} onDeleted={(category) => this.handleOnChange(category)}/>
//                     ))}
//                     {/* <button onClick={() =>{ this.handleAddCategoryTask("this is dmoe")}}>hi</button> */}
//                 </Grid>
//             )
//         }else{
//             return(
//                 <h1>No categories!!</h1>
//             );
//         }
//     }
// }

import React from 'react';
import { Grid } from '@mui/material';
import CategoryItem from './categoryItem';
import {CategoriesActions} from '../../../actions/categoriesActions';

export default function CategoriesList({user, categoriesList}){
    const handleOnChange = (categoryId) => {
        CategoriesActions.handleDeleteCategory(categoryId);
    }
        if(categoriesList != null && categoriesList.length > 0){
            console.log(categoriesList.length)
            return (
                <Grid container spacing={2} className='grid-categories'>
                    {categoriesList.map((category) => (
                        <CategoryItem category={category} key={category._id} onDeleted={(category) => handleOnChange(category)}/>
                    ))}
                    {/* <button onClick={() =>{ this.handleAddCategoryTask("this is dmoe")}}>hi</button> */}
                </Grid>
            )
        }else{
            return(
                <h1>No categories!!</h1>
            );
        }
}

