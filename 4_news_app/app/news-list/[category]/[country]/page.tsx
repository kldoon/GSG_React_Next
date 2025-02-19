import React, { Suspense } from 'react';
import classes from './news-list.module.css';
import NewsList from './news-list';

interface IParams { category: string, country: string }

interface IProps {
  params: Promise<IParams>
}

const NewsListPage = async (props: IProps) => {
  const { category, country } = await props.params;

  return (
    <div>
      <h1 className={classes.header}>{country} {category} News</h1>
      <Suspense fallback={<div className={classes.spinner} />}>
        <NewsList category={category} country={country} />
      </Suspense>
    </div>
  )
}

export default NewsListPage;
