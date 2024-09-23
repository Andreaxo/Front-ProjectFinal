import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css'

const Navbar = () => {
  const handleLogout = () => {
    sessionStorage.removeItem('token'); // Elimina el token
    Swal.fire({
        position: "center",
        icon: "success",
        title: "¡Sesión cerrada!",
        showConfirmButton: false,
        timer: 1500
    });
    navigate('/Login'); // Redirige a la página de Login o donde prefieras
};

  return (
    <nav>
      <ul>
        <li>
          <Link to="/Home">Home</Link>
        </li>
        <li>
          <Link to="/:id">Delete User</Link>
        </li>
        <li>
          <Link to="/Users">Show User</Link>
        </li>
        <li>
          <Link to="/NewUser">New User</Link>
        </li>
        <li>
          <Link to='/LogOut' onClick={handleLogout}>LogOut</Link>
        </li>

      </ul>
    </nav>
  );
};

export default Navbar;
