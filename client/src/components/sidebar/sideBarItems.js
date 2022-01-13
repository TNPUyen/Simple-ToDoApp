
import React from 'react';
import { Tooltip } from '@mui/material';
export default function SideBarItems({item, mobile, onClickItem}) {
    const itemOnClick = onClickItem;
    // var isActive = this.context.router.route.location.pathname === this.props.to;
    return (
        <li className='sidebar-item'>
            <a href={item.path} className='sidebar-item-content' >
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
            </a>
        </li>
    )
}
