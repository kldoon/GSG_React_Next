'use client';
import React, { useEffect, useState } from 'react';
import classes from './latest-news.module.css';
import Item from './item/Item';

const LatestNews = () => {
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  useEffect(() => {
    const sliderInt = setInterval(() => {
      setHighlightedIndex(old => (old + 1) % 3);
    }, 3000);

    return () => {
      clearInterval(sliderInt);
    }
  }, []);

  return (
    <div className={classes.latestNews}>
      <h2>Latest News Articles</h2>
      <div className={classes.items}>
        {
          [0, 1, 2].map(item => <Item key={item} isHighlighted={item === highlightedIndex} />)
        }
      </div>
    </div>
  )
}

export default LatestNews