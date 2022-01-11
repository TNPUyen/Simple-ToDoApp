import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import AppNavBar from './components/navbar';
import Sidebar from './components/sidebar/sideBar.';
import Categories from './pages/Categories/Categories';
import Dashboard from './pages/Home/dashboard';
import Shared from './pages/Shared/Shared';
import Login from './pages/Login/login';
import Register from './pages/Register/register';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Sidebar />
          <AppNavBar />
            <Routes>
              {/* <Route path='/' element={<Dashboard/>}/> */}
              <Route path='/' element={<Categories/>}/>
              <Route path='/Shared' element={<Shared/>}/>
              <Route path='/Login' element={<Login/>}/>
              <Route path='/Register' element={<Register/>}/>
            </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
