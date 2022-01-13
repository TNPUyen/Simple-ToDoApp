import React, { useEffect, useState } from 'react';
import AppNavBar from '../components/navbar';
import Sidebar from '../components/sidebar/sideBar.';
import {Routes, Route} from 'react-router-dom';

import Pinned from '../pages/Pinned/pinned';
import Categories from '../pages/Categories/Categories';
import Dashboard from '../pages/Home/dashboard';
import Shared from '../pages/Shared/Shared';

export default function Default() {
    const [mobile, setMobile] = useState(false);

    useEffect(() => {
        const handleResize = () =>{
            if(window.innerWidth < 1065){
                setMobile(true);
            }else{
                setMobile(false);
            }
        }
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);    
        }
    }, []);
    return (
        <div>        
            <Sidebar mobile={mobile}/>
            <AppNavBar/>
            <div className={!mobile ? 'container' : 'container mobile'}>        
                <Routes>
                    <Route path='/mytodo/today' exact element={<Dashboard/>}/>
                    <Route path='/mytodo/categories' exact element={<Categories/>}/>
                    <Route path='/mytodo/shared' exact element={<Shared/>}/>
                    <Route path='/mytodo/pinned' exact element={<Pinned/>}/>
                </Routes>
            </div>
        </div>
    )
}
