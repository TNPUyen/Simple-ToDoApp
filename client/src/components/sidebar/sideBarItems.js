import { Link } from 'react-router-dom';
import React from 'react';
import { Tooltip } from '@mui/material';
export default function SideBarItems({item, mobile, onClickItem}) {
    const itemOnClick = onClickItem;
    return (
        <li className='sidebar-item'>
            <Link to={item.path} className='sidebar-item-content'>
                {!mobile && (
                    <div className='sidebar-item-icon'>
                        {item.icon}
                    </div>
                )}
                {mobile && (
                    <Tooltip title={item.title}>
                        <div className='sidebar-item-icon'>
                            {item.icon}
                        </div>
                    </Tooltip>    
                )}
                <span>{item.title}</span>
            </Link>
        </li>
    )
}
