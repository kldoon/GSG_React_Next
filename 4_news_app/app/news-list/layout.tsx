import React from 'react';
import classes from './layout.module.css';

export default function NewsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={classes.layout}>
      <div className={classes.sideBar}>
        side bar
      </div>
      <div>
        {children}
      </div>
    </div>
  );
}
