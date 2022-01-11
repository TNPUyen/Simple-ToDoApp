import React from 'react';
import CategoriesActions from '../../../actions/categoriesActions';
import { Dialog, Button, Grid} from '@mui/material';
import CategoryTaskList from './categoryTasks/categoryTaskList';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import ShareIcon from '@mui/icons-material/Share';
import CreateIcon from '@mui/icons-material/Create';

import Tooltip from '@mui/material/Tooltip';
export default class CategoryItem extends CategoriesActions {
    state = {isOpen: false, categoryTasks: []};

    onClickOpenCategory = async (category) => {
        await this.handleGetCategoryTaskList(category._id);
        this.setState({isOpen: true, categoryTasks: this.state.categoryTasks});  
    }
    handleClose = () => {
        this.setState({isOpen: false});
    };

    handleDeleted = async (categoryId) =>{
        // await this.handleDeleteCategory(categoryId);
        await this.props.onDeleted(categoryId)
        // this.setState({isOpen: false});
    }
    render() {
        const category = this.props.category;
        const open = this.state.isOpen;
        return (
            <Grid item lg={3}>
                <div className='categories-container' >
                    <div className='categories-color'></div>
                    <div>
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <h2>{category.title}</h2>
                            <div style={{paddingTop: '6px'}}>
                                <Tooltip title="Delete" >
                                    <button aria-label="delete" className='btn-deleteCategory' onClick={() => this.handleDeleted(category._id)}>
                                        <DeleteIcon />
                                    </button>
                                </Tooltip>
                                <Tooltip title="Share">
                                    <button aria-label="share" className='btn-deleteCategory'>
                                        <ShareIcon />
                                    </button>
                                </Tooltip>
                                <Tooltip title="Update">
                                    <button aria-label="update" className='btn-deleteCategory'>
                                        <CreateIcon />
                                    </button>
                                </Tooltip>
                            </div>
                        </div>
                        <div onClick={() => {this.onClickOpenCategory(category)}}>
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
                    </div>
                    
                </div>
                <Dialog open={open} category = {category} maxWidth="xs" fullWidth>
                    <div className='categoryTask-header'>
                        <h2 style={{padding: '10px'}}>{this.props.category.title}</h2>
                        <Button
                            edge="start"
                            color="inherit"
                            onClick={this.handleClose}
                            aria-label="close"
                            >
                            <CloseIcon />
                        </Button>
                    </div>
                    <CategoryTaskList category = {category} categoryTasks={this.state.categoryTasks} isOpened = {open}/>
                </Dialog>
               
            </Grid>
        )
    }
}
