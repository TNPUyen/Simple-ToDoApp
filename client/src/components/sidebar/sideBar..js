import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/sidebar.css';
import { sideBarContents } from './sideBarContent';
import SideBarItems from './sideBarItems';
export default function Sidebar({mobile, user, isAuth}){
    const navigate = useNavigate();
    const handleOnClick = (e)=> {
        alert(e.target.id);
        return e.target.id;
    }
    const handleLogout = () =>{
        isAuth();
        navigate('/');
        window.location.reload();
    }
    if(user.loggedIn ){
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
                                <li>
                                    <button onClick={handleLogout}>Log out</button>
                                </li>
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
                                <li>
                                    <button onClick={handleLogout}>Log out</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                )}
            </>
        );
    }else{
        return (<div></div>);
    }
};
