import React from 'react';
import classes from './category.module.css';
import Image from 'next/image';

interface IProps {
  data: News.ICategory;
}

const Category = (props: IProps) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.banner}>
        <Image src={props.data.imageURL} alt="Cat Image" fill />
      </div>
      <h2 className={classes.title}>{props.data.title}</h2>
      <h3 className={classes.latest}>{props.data.subtitle}</h3>
    </div>
  )
}

export default Category;