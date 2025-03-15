import React from 'react'
import LatestNews from '@/components/latest-news/LatestNews';

import { fetchNews } from '@/services/news.service';

const Page = async () => {
  const latestNews: News.Item[] = await fetchNews('politics', 'us') as News.Item[];

  return (
    <div>
      <LatestNews
        subTitle="USA Politics"
        newsList={latestNews.slice(0, 3)}
      />
    </div>
  )
}

export default Page;