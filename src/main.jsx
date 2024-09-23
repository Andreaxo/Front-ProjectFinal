import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CrudApp } from './components/crudApp.jsx'
import { DeleteUser } from './components/DeleteUser.jsx';
import { ShowUser } from './components/ShowUser.jsx';
import { Login } from './components/login/Login.jsx';
import { PrivateRoute } from './router/PrivateRoute.jsx';
import { Home } from './components/home/Home.jsx';
import { LogOut } from './components/logOut/LogOut.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
       {/* Navbar se mostrará en todas las rutas */}
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/" element={<Login />} />

        <Route path='/Home' element={<PrivateRoute element={<Home/>} />}/>
        <Route path='/NewUser' element={<PrivateRoute element={<CrudApp/>}/>}/>
        <Route path="/:id" element={<PrivateRoute element={<DeleteUser />}/>}/>
        <Route path="/Users" element={<PrivateRoute element={<ShowUser />}/>} />
        <Route path='/LogOut' element={<PrivateRoute element={<LogOut/>}/>}/>
      </Routes>
    </Router>
  </StrictMode>
);