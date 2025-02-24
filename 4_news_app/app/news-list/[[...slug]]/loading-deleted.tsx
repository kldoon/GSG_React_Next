import React from 'react';
import classes from './news-list.module.css';

const NewLoadingPage = () => {
  return (
    <div className={classes.newsLoading}>
      <div className={classes.spinner} />
    </div>
  )
}

export default NewLoadingPage;