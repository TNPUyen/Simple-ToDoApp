import React, { Component } from 'react'
import CategoriesActions from '../../../actions/categoriesActions';
import { TextField, Dialog, DialogTitle, DialogContent, DialogActions, Button, Checkbox} from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

export default class CategoriesInput extends CategoriesActions {
    state = {isOpen: false, currentCategory: "",}
    handleClickOpen = () => {
        this.setState({isOpen: true});
    };
    
    handleClose = () => {
        this.setState({isOpen: false});
    };
    render() {
        const open = this.state.isOpen;

        return (
            <div className='categories-header'>
                <h1>Categories</h1>
                <button type="submit" onClick={this.handleClickOpen}><AddOutlinedIcon /></button>
                <Dialog open={open} onClose={this.handleClose}>
                    <DialogTitle>Add new task</DialogTitle>
                    <form autoComplete="off" onSubmit={()=> this.handleAddCategory()}>
                        <DialogContent>
                            <TextField label="Category Name" name="category" id="standard-size-small" size="small" fullWidth variant="standard" value={this.state.currentCategory} required={true} onChange={this.handleChangeCategory} className="input-newTask"/>
                            <DialogActions>
                                <Button onClick={this.handleClose}>Cancel</Button>
                                <Button onClick={this.handleClose} type='submit'>Add New</Button>
                        </DialogActions>        
                        </DialogContent>    
                    </form>
                </Dialog>
            </div>
        )
    }
}
