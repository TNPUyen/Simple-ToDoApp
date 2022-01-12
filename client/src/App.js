import { Routes, Route, BrowserRouter } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import './App.css';
import AppNavBar from './components/navbar';
import Sidebar from './components/sidebar/sideBar.';
import Categories from './pages/Categories/Categories';
import Dashboard from './pages/Home/dashboard';
import Shared from './pages/Shared/Shared';
import Login from './pages/Login/login';
import Register from './pages/Register/register';


function App() {
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
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
          <Sidebar mobile={mobile}/>
          <AppNavBar />
          <div  className={!mobile ? 'container' : 'container mobile'}>
            <Routes>
              <Route path='/' element={<Dashboard/>}/>
              <Route path='/categories' element={<Categories/>}/>
              <Route path='/shared' element={<Shared/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/register' element={<Register/>}/>
            </Routes>
          </div>
            
      </BrowserRouter>
    </div>
  );
}

export default App;
