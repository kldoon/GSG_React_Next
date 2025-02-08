import React from 'react';
import classes from './header.module.css';
import logo from '@/public/logo.png';

const Header = () => {
  return (
    <div
      className={classes.header}
    >
      <div className={classes.logo}>
        <img src={logo.src} alt="logo" />
        <h1>Quick News</h1>
      </div>
      <nav>
        <a href="" className={classes.selected}>Home</a>
        <a href="">Add News</a>
        <a href="">Categories</a>
        <a href="">Admin</a>
      </nav>
    </div>
  )
}

export default Header