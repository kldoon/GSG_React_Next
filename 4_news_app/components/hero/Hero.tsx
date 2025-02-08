import React from 'react';
import classes from './hero.module.css';

const Hero = () => {
  return (
    <div className={classes.hero}>
      <h2>Stay Informed, Stay Ahead</h2>
      <span>Your go-to platform for the latest and most relevant news articles.</span>
      <div className={classes.actions}>
        <div className="button">Post a News</div>
        <div className="button outline">Read News</div>
        {/* outline */}
      </div>
    </div>
  )
}

export default Hero