import React, { useEffect, useState } from 'react';
import { Dialog, Button, Grid} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ShareIcon from '@mui/icons-material/Share';
import CreateIcon from '@mui/icons-material/Create';

import Tooltip from '@mui/material/Tooltip';
import { SharedAction } from '../../../actions/sharedAction';
import CategoryTaskList from '../../Categories/components/categoryTasks/categoryTaskList';
export default function SharedItem ({category}) {
    const [isOpen, setIsOpen] = useState(false);
    const [currentCategory, setCurrentCategory] = useState(null);
    const [categoryTask, setCategoryTask] = useState(null);
    // useEffect(() => {
    // console.log(category)

    //     if(category !=null){
    //         setCurrentCategory(category);
    // console.log(currentCategory)

    //     }
    // }, [])
    // state = {isOpen: false, categoryTasks: []};

    const onClickOpenCategory = async (category) => {
        const tempTaskList = await SharedAction.handleGetSharedTaskList(category._id);
        console.log(tempTaskList)
        setCategoryTask(tempTaskList);
        setIsOpen(true); 
    }
    const handleClose = () => {
        setIsOpen(false); 
    };
        return (
            <Grid item lg={3}>
                <div className='categories-container' >
                    <div className='categories-color'></div>
                    <div>
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <h2>{category.title}</h2>
                            <div style={{paddingTop: '6px'}}>
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
                        <div onClick={() => {onClickOpenCategory(category)}}>
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
                <Dialog open={isOpen} category = {category} maxWidth="xs" fullWidth> 
                    <div className='categoryTask-header'>
                        <h2 style={{padding: '10px'}}>{category.title}</h2>
                        <Button
                            edge="start"
                            color="inherit"
                            aria-label="close"
                            onClick={handleClose}
                            >
                            <CloseIcon />
                        </Button>
                    </div>
                    <CategoryTaskList category = {category} categoryTasks={categoryTask} isOpened = {isOpen}/>
                </Dialog>
               
            </Grid>
        )
}