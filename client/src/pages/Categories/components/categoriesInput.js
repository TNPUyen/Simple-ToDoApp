import React, {useState} from 'react';
import {CategoriesActions} from '../../../actions/categoriesActions';
import { TextField, Dialog, DialogTitle, DialogContent, DialogActions, Button} from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

export default function CategoriesInput ({user, categoriesList}) {
    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState("");

    const handleClickOpen = () => {
        setIsOpen(true);
    };
    
    const handleClose = () => {
        setIsOpen(false);
    };

        return (
            <div className='categories-header'>
                <h1>Categories</h1>
                <button type="submit" onClick={handleClickOpen}><AddOutlinedIcon /></button>
                <Dialog open={isOpen} onClose={handleClose}>
                    <DialogTitle>Add new category</DialogTitle>
                    <form autoComplete="off" onSubmit={()=> CategoriesActions.handleAddCategory(user._id, value, categoriesList)}>
                        <DialogContent>
                            <TextField label="Category Name" name="category" id="standard-size-small" size="small" fullWidth variant="standard" value={value} required={true} onChange={e => setValue(e.target.value)} className="input-newTask"/>
                            <DialogActions>
                                <Button onClick={handleClose}>Cancel</Button>
                                <Button onClick={handleClose} type='submit'>Add New</Button>
                        </DialogActions>        
                        </DialogContent>    
                    </form>
                </Dialog>
            </div>
        )
    
}
