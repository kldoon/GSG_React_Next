import React from 'react';
import classes from './categories.module.css';
import Category from '../category/Category';
import { CATEGORIES } from '@/constants/data';

const Categories = () => {
  return (
    <div className={classes.wrapper}>
      {
        CATEGORIES.map(cat => <Category key={cat.title} data={cat} />)
      }
    </div>
  )
}

export default Categories