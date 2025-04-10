'use client';

import React, { useActionState } from 'react';
import classes from './add-article.module.css';
import { addArticle } from '@/controllers/news-actions';
import SubmitArticle from './SubmitArticle';

const AddArticleForm = () => {

  const [state, formAction] = useActionState(addArticle, { errors: [] });

  return (
    <form className={classes.newsForm} action={formAction}>
      <div className={classes.formGroup}>
        <label htmlFor="a-title" className={classes.formLabel}>
          News Title
        </label>
        <input id="a-title" maxLength={300} type="text" name="title" className={classes.formInput} />
      </div>
      <div className={classes.formGroup}>
        <label htmlFor="a-image" className={classes.formLabel}>
          News Image
        </label>
        <input id="a-image" type="file" name="image" accept="image/*" className={classes.formInput} />
      </div>
      <div className={classes.formGroup}>
        <label htmlFor="a-summary" className={classes.formLabel}>
          News Summary
        </label>
        <input id="a-summary" type="text" name="summary" className={classes.formInput} required />
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
      <ul className={classes.errors}>
        {state.errors.map(err => <li key={err}>{err}</li>)}
      </ul>
      <div className={classes.formGroup}>
        <SubmitArticle />
      </div>
    </form>
  )
}

export default AddArticleForm