import React from 'react';
import classes from './news-list.module.css';
import Image from 'next/image';

const api_key = 'pub_69675b359f778a6ecbb631d39cbd30af4c4f7';

interface IParams { category: string, country: string }

interface IProps {
  params: Promise<IParams>
}

const NewsList = async (props: IProps) => {
  const { category, country } = await props.params;

  const res = await fetch(
    `https://newsdata.io/api/1/latest?apikey=${api_key}&category=${category}&country=${country}`,
    { method: 'GET', cache: 'no-store' }
  );

  const newsRes = (await res.json()) as News.IResponse;
  const latestNews: News.Item[] = newsRes.results.map(item => (
    {
      id: item.article_id,
      title: item.title,
      img: item.image_url,
      content: item.description
    }
  ));

  return (
    <div>
      <h1 className={classes.header}>{country} {category} News</h1>
      {
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
      }
    </div>
  )
}

export default NewsList;
