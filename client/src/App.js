import { Routes, Route, BrowserRouter } from 'react-router-dom';
import React, { createContext, useContext, useEffect, useState } from 'react';
import './App.css';
import AppNavBar from './components/navbar';
import Sidebar from './components/sidebar/sideBar.';
import Categories from './pages/Categories/Categories';
import Dashboard from './pages/Home/dashboard';
import Shared from './pages/Shared/Shared';
import Login from './pages/Login/login';
import Register from './pages/Register/register';
import ProtectedRoute from './routes/protectedRoute';
import Pinned from './pages/Pinned/pinned';
import { UserContext } from './helpers/userContext';
import Default from './layout/default';
import UnAuthenticated from './layout/unAuthenticated';

// export const UserContext = createContext();

function App() {
  const [mobile, setMobile] = useState(false);
  const {user} = useContext(UserContext);


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

  // const isAuthenticated = () => {
  //   const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  //   if(userInfo != null){
  //       return true;
  //   }
  //   return false;
  // };
  
  // const isAuth = isAuthenticated();
  console.log(user)
  return (
    <div className="App">
        {/* // <BrowserRouter>  */}
            {!user.loggedIn && <Sidebar mobile={mobile}/>}
            {!user.loggedIn && <AppNavBar/>}
            <div  className={!mobile ? 'container' : 'container mobile'}>
              <Routes>
                <Route path='/' exact element={<Login/>}/>
                <Route path='/register' exact element={<Register/>}/>
                <Route path='/mytodo' element={<ProtectedRoute/>}>
                  <Route path='/mytodo/today' exact element={<Dashboard/>}/>
                  <Route path='/mytodo/categories' exact element={<Categories/>}/>
                  <Route path='/mytodo/shared' exact element={<Shared/>}/>
                  <Route path='/mytodo/pinned' exact element={<Pinned/>}/>
                </Route>
              </Routes>
            </div> 
        {/* //  </BrowserRouter> */}
          
    // </div>
    // !user ? <Default /> : <UnAuthenticated />
  );
}



export default App;
