import Link from 'next/link';
import React from 'react';
import classes from './main-header.module.css';

const MainHeader = () => {
  return (
    <div className={classes.wrapper} >
      <h1 style={{ color: '#f65533' }}>First Next Example</h1>
      <nav className={classes['main-nav']}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/reach/about">Reach US</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default MainHeader