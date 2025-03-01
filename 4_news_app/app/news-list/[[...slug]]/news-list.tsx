import Image from 'next/image';
import { getNews } from '@/services/news.service';

const NewsList = async ({ category }: { category: string }) => {
  const latestNews: News.Item_[] = getNews(category);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'flex-start' }}>
      {
        latestNews.map(item => (
          <div key={item.id} style={{ flex: '0 0 23%', padding: '10px', cursor: 'pointer', boxSizing: 'border-box', boxShadow: '0px 0px 4px #ddd, 0px 0px 5px #eee' }}>
            <h3 style={{ fontSize: '15px', margin: '0', height: '75px' }}>{item.title?.substring(0, 95)}</h3>
            <div style={{ width: '100%', height: '150px', position: 'relative' }}>
              {
                <Image
                  src={item.image || '/cat1.png'}
                  alt="new-img"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              }
            </div>
            <p style={{ fontSize: '12px', fontFamily: 'var(--font-mulish)', color: '#999' }}>{item.summary}</p>
          </div>
        ))
      }
    </div>
  )
};

export default NewsList;