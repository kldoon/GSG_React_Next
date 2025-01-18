import React, { useContext } from 'react'
import './nav-bar.css';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../providers/authProvider';
import { Role } from '../../types';

const NavBar = () => {
  const location = useLocation();
  const { user, logout } = useContext(AuthContext);

  const handleLogout = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    logout();
  }

  return (
    <nav>
      <span>
        <Link to='/' className={location.pathname === '/' ? 'active' : ''}>Home Page</Link>
        {
          user?.role === Role.ADMIN && (
            <Link to='/add' className={location.pathname === '/add' ? 'active' : ''}>Add Student</Link>
          )
        }
        <Link to='/about' className={location.pathname === '/about' ? 'active' : ''}>About App</Link>
      </span>
      <span>
        {
          user?.userName
            ? `Hello ${user.userName}`
            : <Link to='/login' className={location.pathname === '/login' ? 'active' : ''}>Login</Link>
        }
        {
          user?.userName && <Link onClick={handleLogout} to=''>Logout</Link>
        }
      </span>
    </nav>
  )
}

export default NavBar