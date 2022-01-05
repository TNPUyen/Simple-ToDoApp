import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import AppNavBar from './components/navbar';
import Sidebar from './components/sidebar/sideBar.';
import Dashboard from './pages/Home/dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <AppNavBar />
          {/* <Sidebar /> */}
            <Routes>
              <Route path='/' element={<Dashboard/>}/>
            </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
