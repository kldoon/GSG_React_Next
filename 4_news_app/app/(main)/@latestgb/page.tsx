import React from 'react'
import LatestNews from '@/components/latest-news/LatestNews';

import { fetchNews } from '@/services/news.service';

const Page = async () => {
  const latestNews: News.Item[] = await fetchNews('politics', 'gb') as News.Item[];

  if (latestNews.length === 0) return null;

  return (
    <div>
      <LatestNews
        subTitle="Great Britain Politics"
        newsList={latestNews.slice(0, 3)}
      />
    </div>
  )
}

export default Page;