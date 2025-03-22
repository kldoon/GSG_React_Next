import React, { Suspense } from 'react';
import classes from './news-list.module.css';
import NewsList from './news-list';
import { Metadata } from 'next';

interface IProps {
  params: Promise<{ slug: string[] }>
}

export const generateMetadata = async (props: IProps): Promise<Metadata> => {
  const { slug } = await props.params;
  const [category] = slug;

  return {
    title: `${category.toUpperCase()} News`
  }
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
  const [category, _year] = slug;

  return (
    <div style={{ width: '100%' }}>
      <h1 className={classes.header}>{category} News</h1>
      <Suspense fallback={<div className={classes.spinner} />}>
        <NewsList category={category} />
      </Suspense>
    </div>
  )
}

export default NewsListPage;
