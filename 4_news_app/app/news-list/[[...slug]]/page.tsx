import React, { Suspense } from 'react';
import classes from './news-list.module.css';
import NewsList from './news-list';

interface IProps {
  params: Promise<{ slug: string[] }>
}

const NewsListPage = async (props: IProps) => {
  const { slug } = await props.params;

  if (!slug?.length) {
    return (
      <div>
        <h3>You reached this page without selecting a country or category!</h3>
      </div>
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [category, country, _year] = slug;

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
