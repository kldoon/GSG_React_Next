'use client';

import React from 'react';
import classes from './add-article.module.css';
import { useFormStatus } from 'react-dom';

const SubmitArticle = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className={classes.submitButton}
    >
      {pending ? 'Submitting...' : 'Submit News'}
    </button>
  )
}

export default SubmitArticle;