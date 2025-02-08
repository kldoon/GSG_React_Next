'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classes from './header.module.css';

interface IProps {
  href: string;
  children: React.ReactNode;
}

const NavLink = (props: IProps) => {
  const path = usePathname();
  return (
    <Link
      href={props.href}
      className={path === props.href ? classes.selected : undefined}
    >
      {props.children}
    </Link>
  )
}

export default NavLink