import React from 'react';
import '../../styles/sidebar.css';
import { sideBarContents } from './sideBarContent';
import SideBarItems from './sideBarItems';


export default function Sidebar({mobile}){
    const handleOnClick = (e)=> {
        alert(e.target.id);
        return e.target.id;
    }
    return (
        <>
            {!mobile && (
                <div className='sidebar'>
                    <div className='sidebar-header'>
                        <h1>.todoapp</h1>
                        <ul className='sidebar-list'>
                            {sideBarContents.map((item) => {
                                return (
                                    <SideBarItems item = {item} key={item.id} handleOnClick = {handleOnClick}/>
                                );
                            })}
                        </ul>
                    </div>
                </div>)}
            {mobile && (
                <div className='sidebar-mobile'>
                    <div className='sidebar-header'>
                        <h1 style={{padding: '1em 0.275em'}}>.TDA</h1>
                        <ul className='sidebar-list'>
                            {sideBarContents.map((item) => {
                                return (
                                    <SideBarItems item = {item} key={item.id} mobile={mobile} onClickItem={handleOnClick}/>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            )}
        </>
        
    );
};
