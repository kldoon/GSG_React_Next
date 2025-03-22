import { getNewsArticle } from '@/services/news.service';
import Image from 'next/image';
import React from 'react';
import classes from './article.module.css';
import { Metadata } from 'next';

interface IProps {
  params: Promise<{ slug: string }>
}

export const generateMetadata = async (props: IProps): Promise<Metadata> => {
  const { slug } = await props.params;
  const article = getNewsArticle(slug);

  return {
    title: `${article.title}`,
    authors: { name: article.author }
  }
}

const NewArticle = async (props: IProps) => {
  const slug = (await props.params).slug;
  const article = getNewsArticle(slug);

  return (
    <article className={classes.articleContainer}>
      <h1 className={classes.articleTitle}>{article.title}</h1>
      <address className={classes.articleAddress}>
        <b>Author:</b> <cite>{article.author}</cite> | {new Date(article.date).toLocaleDateString()}
      </address>
      <Image
        className={classes.articleImage}
        src={article.image}
        alt="article image"
        width={500}
        height={150}
        style={{ objectFit: 'cover' }}
      />
      <main className={classes.articleMain}>
        <p className={classes.articleParagraph}>{article.content}</p>
      </main>
    </article>

  )
}

export default NewArticle