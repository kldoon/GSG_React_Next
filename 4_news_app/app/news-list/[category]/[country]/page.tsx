import React from 'react';
import classes from './news-list.module.css';
import Image from 'next/image';
import { fetchNews } from '@/services/news.service';

interface IParams { category: string, country: string }

interface IProps {
  params: Promise<IParams>
}

const NewsList = async (props: IProps) => {
  const { category, country } = await props.params;
  const latestNews: News.Item[] = await fetchNews(category, country) as News.Item[];

  return (
    <div>
      <h1 className={classes.header}>{country} {category} News</h1>
      <div>
        {
          latestNews.map(item => (
            <div key={item.id}>
              <h3>{item.title}</h3>
              {
                item.img !== null && <Image
                  src={item.img}
                  alt="new-img"
                  width={650}
                  height={150}
                  style={{ objectFit: 'cover' }}
                />
              }
              <p>{item.content}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default NewsList;
