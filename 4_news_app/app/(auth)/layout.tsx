import React from 'react';
import classes from './layout.module.css';

export default function AuthLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <div className={classes.layout}>
      {children}
    </div>
  );
}
