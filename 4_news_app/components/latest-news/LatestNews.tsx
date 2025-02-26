'use client';
import React, { useEffect, useState } from 'react';
import classes from './latest-news.module.css';
import Item from './item/Item';

interface IProps {
  newsList: News.Item[];
}

const LatestNews = (props: IProps) => {
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
          props.newsList.map((data, index) => (
            <Item
              key={data.id}
              data={data}
              isHighlighted={index === highlightedIndex}
            />
          ))
        }
      </div>
    </div>
  )
}

export default LatestNews