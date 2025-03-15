import { getNewsByCategory } from '@/services/news.service';
import ArticleItem from '@/components/article-item/ArticleItem';

const NewsList = async ({ category }: { category: string }) => {
  const latestNews: News.Item_[] = getNewsByCategory(category);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'flex-start' }}>
      {
        latestNews.map(item => <ArticleItem key={item.id} item={item} />)
      }
    </div>
  )
};

export default NewsList;