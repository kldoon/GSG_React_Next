import React from 'react'
import classes from './add-news.module.css';

const Page = () => {
  const addArticle = async (formData: FormData) => {
    'use server';

    const newArticle: News.Item_ = {
      title: formData.get('title')?.toString() || '',
      image: formData.get('image')?.toString() || '',
      summary: formData.get('summary')?.toString() || '',
      content: formData.get('content')?.toString() || '',
      date: new Date(formData.get('date')?.toString() || '').getTime() / 1000,
      author: formData.get('author')?.toString() || '',
      author_email: formData.get('author_email')?.toString() || '',
      slug: ''
    };

    console.log(newArticle);
  }

  return (
    <div className={classes.newsFormContainer}>
      <h1 className={classes.formTitle}>Add News Page</h1>
      <p className={classes.formDescription}>Please fill all the required news data</p>
      <form className={classes.newsForm} action={addArticle}>
        <div className={classes.formGroup}>
          <label htmlFor="a-title" className={classes.formLabel}>
            News Title
          </label>
          <input id="a-title" type="text" maxLength={300} name="title" className={classes.formInput} />
        </div>
        <div className={classes.formGroup}>
          <label htmlFor="a-image" className={classes.formLabel}>
            News Image URL
          </label>
          <input id="a-image" type="text" name="image" className={classes.formInput} />
        </div>
        <div className={classes.formGroup}>
          <label htmlFor="a-summary" className={classes.formLabel}>
            News Summary
          </label>
          <input id="a-summary" type="text" name="summary" className={classes.formInput} />
        </div>
        <div className={classes.formGroup}>
          <label htmlFor="a-content" className={classes.formLabel}>
            News Content
          </label>
          <textarea id="a-content" rows={4} name="content" className={classes.formTextarea} />
        </div>
        <div className={classes.formGroup}>
          <label htmlFor="a-date" className={classes.formLabel}>
            News Date
          </label>
          <input id="a-date" type="date" name="date" className={classes.formInput} />
        </div>
        <div className={classes.formGroup}>
          <label htmlFor="a-category" className={classes.formLabel}>
            News Category
          </label>
          <select name="category" defaultValue="global" className={classes.formSelect}>
            <option value="global">Global</option>
            <option value="palestine">Palestine</option>
            <option value="gaza">Gaza</option>
            <option value="finance">Finance</option>
            <option value="westbank">Westbank</option>
            <option value="weather">Weather</option>
            <option value="sports">Sports</option>
          </select>
        </div>
        <div className={classes.formHidden}>
          <input type="hidden" name="author" value="Sarah Miller" />
          <input type="hidden" name="author_email" value="sarahmiller@example.com" />
        </div>
        <div className={classes.formGroup}>
          <button type="submit" className={classes.submitButton}>
            Submit News
          </button>
        </div>
      </form>
    </div>
  )
}

export default Page;