/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const api_key = 'pub_69675b359f778a6ecbb631d39cbd30af4c4f7';
const category = 'sports';
const country = 'us';
const Page = () => {
  const [latestNews, setLatestNews] = useState<News.Item[]>([]);

  const getNews = () => {
    fetch(
      `https://newsdata.io/api/1/latest?apikey=${api_key}&category=${category}&country=${country}`,
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
      });
  }

  useEffect(() => {
    getNews();
  }, []);

  return (
    <div>
      <h1>Categories Page</h1>
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

export default Page;