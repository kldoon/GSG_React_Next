import React from 'react';
import classes from './header.module.css';
import logo from '@/public/logo.png';
import NavLink from './NavLink';

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.logo}>
        <img src={logo.src} alt="logo" />
        <h1>Quick News</h1>
      </div>
      <nav>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/add-news">Add News</NavLink>
        <NavLink href="/categories">Categories</NavLink>
        <NavLink href="/admin">Admin</NavLink>
      </nav>
    </div>
  )
}

export default Header