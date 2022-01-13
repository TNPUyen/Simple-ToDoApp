import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/sidebar.css';
import { sideBarContents } from './sideBarContent';
import SideBarItems from './sideBarItems';
import { UserContext } from '../../helpers/userContext';
export default function Sidebar({mobile}){
    const navigate = useNavigate();

    const handleOnClick = (e)=> {
        alert(e.target.id);
        return e.target.id;
    }
    const handleLogout = () =>{
        logout();
        navigate('/');
        window.location.reload();

    }
    const { logout } = useContext(UserContext);
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
                                })};
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
                                        <SideBarItems item = {item} key={item.id} mobile={mobile} onClickItem={this.handleOnClick}/>
                                    );
                                })};
                                <li>
                                    <button>Log out</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                )}
            </>
            
        );
};
