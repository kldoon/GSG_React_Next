import { getNewsArticle } from '@/services/news.service';
import Image from 'next/image';
import React from 'react'

interface IProps {
  params: Promise<{ slug: string }>
}

const NewArticle = async (props: IProps) => {
  const slug = (await props.params).slug;
  const article = getNewsArticle(slug);

  return (
    <article>
      <h1>{article.title}</h1>
      <address><b>Author:</b> <cite>{article.author}</cite> | {new Date(article.date).toLocaleDateString()}</address>
      <Image src={article.image} alt='article image' width={500} height={150} style={{ objectFit: 'cover' }} />
      <main>
        <p>{article.content}</p>
      </main>
    </article>
  )
}

export default NewArticle