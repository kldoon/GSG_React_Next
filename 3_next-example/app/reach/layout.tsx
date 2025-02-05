import Link from 'next/link';
import React from 'react';
import classes from './layout.module.css';

interface IProps {
  children: React.ReactNode;
}

const ReachUSLayout = (props: IProps) => {
  return (
    <div className={classes.wrapper}>
      <aside>
        <ul>
          <li>
            <Link href="/reach/about">About US</Link>
          </li>
          <li>
            <Link href="/reach/contact">Contact US</Link>
          </li>
        </ul>
      </aside>
      <main>
        {props.children}
      </main>
    </div>
  )
}

export default ReachUSLayout;