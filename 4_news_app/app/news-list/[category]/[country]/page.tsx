'use client';

import React, { useEffect, useState } from 'react';
import classes from './news-list.module.css';
import Image from 'next/image';

const api_key = 'pub_69675b359f778a6ecbb631d39cbd30af4c4f7';

interface IParams { category: string, country: string }

interface IProps {
  params: Promise<IParams>
}

const NewsList = (props: IProps) => {
  const [params, setParams] = useState<IParams>({ category: '', country: '' });
  const [latestNews, setLatestNews] = useState<News.Item[]>([]);
  const [loading, setLoading] = useState(true);

  const getNews = async () => {
    setParams(await props.params);

    if (!params.category) return;
    setLoading(true);

    fetch(
      `https://newsdata.io/api/1/latest?apikey=${api_key}&category=${params.category}&country=${params.country}`,
      { method: 'GET' }
    )
      // as tells the editor that the response you are getting from json() is a News.IResponse
      .then(res => res.json() as Promise<News.IResponse>)
      .then(res => {
        const newsList: News.Item[] = res.results.map(item => (
          {
            id: item.article_id,
            title: item.title,
            img: item.image_url,
            content: item.description
          }
        ));
        setLatestNews(newsList);
      }).finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    getNews();
  }, [params]);

  return (
    <div>
      <h1 className={classes.header}>{params.country} {params.category} News</h1>
      {
        loading
          ? <div className={classes.spinner} />
          : <div>
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
      }
    </div>
  )
}

export default NewsList;
