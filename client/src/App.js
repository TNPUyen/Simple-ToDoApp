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
import PageNotFound from './pages/404/pageNotFound';

// export const UserContext = createContext();

function App() {
  const [mobile, setMobile] = useState(false);    
  // const {user, setUser} = useContext(UserContext);

  const [user, setUser] = useState({info: '', loggedIn:null})
  const userInfo = localStorage.getItem('userInfo');


  useEffect(() => {
      const handleResize = () =>{
          if(window.innerWidth < 1065){
              setMobile(true);
          }else{
              setMobile(false);
          }
      }
      window.addEventListener("resize", handleResize);
      const loggedIn = localStorage.getItem('loggedIn');

      loggedIn && JSON.parse(loggedIn) ? setUser({info: JSON.parse(userInfo), loggedIn: true}) : setUser({info: '', loggedIn: false});
      return () => {
          window.removeEventListener("resize", handleResize);    
      }
  }, []);

  useEffect(() => {
    localStorage.setItem('loggedIn', user.loggedIn);
  }, [user.loggedIn])

  return (
    <div className="App">
        {/* // <BrowserRouter>  */}
            <Sidebar mobile={mobile} user={user} isAuth={() => setUser({info: '', loggedIn: false})}/>
            <div className={!mobile ? 'container' : 'container mobile'}>
              <AppNavBar user={user}/>

              <Routes>
                {!user.loggedIn && (
                  <>
                    <Route path='/' exact element={<Login isAuth={() => setUser({info: JSON.parse(userInfo), loggedIn: true})}/>}/>
                    <Route path='/register' exact element={<Register/>}/>
                  </>
                )}
                {user.loggedIn && (
                  <>
                    <Route path='/mytodo/today' element={<ProtectedRoute user={user}><Dashboard/></ProtectedRoute>}/>
                    <Route path='/mytodo/categories' element={<ProtectedRoute user={user}><Categories/></ProtectedRoute>}/>
                    <Route path='/mytodo/pinned' element={<ProtectedRoute user={user}><Pinned/></ProtectedRoute>}/>
                    <Route path='/mytodo/shared' element={<ProtectedRoute user={user}><Shared/></ProtectedRoute>}/>
                  </>
                )}
                <Route path='*' exact element={<PageNotFound/>}/>
              </Routes>
            </div> 
        {/* //  </BrowserRouter> */}
          
    </div>
    // !user ? <Default /> : <UnAuthenticated />
  );
}



export default App;
