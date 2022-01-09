import React, { Component } from 'react';
import CategoriesActions from '../../../actions/categoriesActions';
import { TextField, Dialog, DialogTitle, DialogContent, DialogActions, Button, Grid} from '@mui/material';
import CategoryTask from './categoryTasks/categoryTask';
import CloseIcon from '@mui/icons-material/Close';
export default class CategoryItem extends CategoriesActions {
    state = {isOpen: false}

    onClickOpenCategory = (category) => {
        this.setState({isOpen: true});  
    }
    handleClose = () => {
        this.setState({isOpen: false});
    };
   
    render() {
        const category = this.props.category;
        const open = this.state.isOpen;
        return (
            <Grid item lg={3}>
                <div className='categories-container' onClick={() => {this.onClickOpenCategory(category)}}>
                    <div className='categories-color'></div>
                    <h2>{category.title}</h2>
                    <p>4 done</p>
                    <p>4 to do</p>
                    <div className='categories-footer'>
                        <div>
                            <h4>Shared</h4>
                        </div>
                        <div>
                            <h4>Progress</h4>
                            <p>50%</p>
                        </div>
                    </div>
                </div>
                <Dialog open={open} category = {category}>
                    <DialogTitle sx={{bgcolor: '#003049'}}>
                        {this.props.category.title}
                        <Button
                            edge="start"
                            color="inherit"
                            onClick={this.handleClose}
                            aria-label="close"
                            >
                            <CloseIcon />
                        </Button>
                    </DialogTitle>
                    <CategoryTask category = {category}/>
                </Dialog>
            </Grid>
        )
    }
}
