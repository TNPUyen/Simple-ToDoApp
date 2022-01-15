import React from 'react';
import CategoryItem from '../../Categories/components/categoryItem';
import { Grid } from '@mui/material';
import SharedItem from './sharedItem';

export default function SharedList({sharedList}) {
    console.log(sharedList)
    if(sharedList != null && sharedList.length >0){
        return (
            <Grid container spacing={2} className='grid-categories'>
                {sharedList.map((category) => (
                    <SharedItem category={category} key={category._id} />
                ))}
                {/* <button onClick={() =>{ this.handleAddCategoryTask("this is dmoe")}}>hi</button> */}
            </Grid>
        )
    }else{
        return(
            <h1>No share categories!!</h1>
        );
    }
}
