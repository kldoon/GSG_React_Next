import React from 'react'
import classes from '../latest-news.module.css';
import mockImg from '@/public/n1.jpg';

interface IProps {
  isHighlighted: boolean;
}

const Item = (props: IProps) => {
  return (
    <div className={`${classes.newsItem} ${props.isHighlighted ? classes.highlighted : ''}`}>
      <div className={classes.info}>
        <h3>Urban Planning</h3>
        <p>Explore the recent developments in urban planning as cities expand and adapt to modern challenges.</p>
        <div className="button outline">Read More</div>
      </div>
      <img src={mockImg.src} alt="news-img" />
    </div>
  )
}

export default Item