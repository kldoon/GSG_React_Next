import Image from 'next/image';
import { fetchNews } from '@/services/news.service';

const NewsList = async ({ category, country }: { category: string, country: string }) => {
  const latestNews: News.Item[] = await fetchNews(category, country) as News.Item[];
  return (
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
  )
};

export default NewsList;