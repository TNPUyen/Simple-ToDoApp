import React, { Component } from 'react';
import { TextField, DialogContent, DialogActions, Button,} from '@mui/material';
import CategoryTaskActions from '../../../../actions/categoryTaskActions';
export default class CategoryTask extends CategoryTaskActions {
    state = {isOpen: true, currentCategoryTask: ""}
    render() {
        return (
            <form autoComplete="off" onSubmit={()=> this.handleAddCategoryTask(this.props.category)}>
                <DialogContent>
                    <TextField label="What to do?" name="todos" id="standard-size-small" size="small" fullWidth variant="standard" value={this.state.currentCategoryTask} required={true} onChange={this.handleChangeCategoryTask} className="input-newTask"/>
                    {/* <TextField label="What to do?" name="todos" id="standard-size-small" fullWidth variant="standard" value={this.state.currentTask} required={true} onChange={this.handleChangeTask} className="input-newTask"/> */}
                    {/* <DialogActions> */}
                        <Button type='submit'>Add New</Button>
                    {/* </DialogActions>         */}
                </DialogContent>     
            </form>
        )
    }
}
