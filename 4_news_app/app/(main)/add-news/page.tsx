import React from 'react';
import classes from './add-article.module.css';
import AddArticleForm from '@/components/add-article/AddArticle';

const Page = () => {

  return (
    <div className={classes.newsFormContainer}>
      <h1 className={classes.formTitle}>Add News Page</h1>
      <p className={classes.formDescription}>Please fill all the required news data</p>
      <AddArticleForm />
    </div>
  )
}

export default Page;