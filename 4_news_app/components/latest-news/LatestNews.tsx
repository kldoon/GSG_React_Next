import React from 'react';
import classes from './latest-news.module.css';
import Item from './item/Item';

const LatestNews = () => {
  return (
    <div className={classes.latestNews}>
      <h2>Latest News Articles</h2>
      <div className={classes.items}>
        {
          [1, 2, 3].map(item => <Item key={item} />)
        }
      </div>
    </div>
  )
}

export default LatestNews