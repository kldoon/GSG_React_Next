import sql from 'better-sqlite3';
const db = sql('news.db');

const getNews = (category: string): News.Item_[] => {
  const results = db.prepare('SELECT * FROM articles WHERE category = ?').all(category);
  return results as News.Item_[];
}

const api_key = 'pub_701076cdd4cdeaa56df41b17fae04f1ce8350';

/**
 * @deprecated we will use our db to fetch data
 */
const fetchNews = async (category: string, country: string) => {
  const res = await fetch(
    `https://newsdata.io/api/1/latest?apikey=${api_key}&category=${category}&country=${country}`,
    { method: 'GET', cache: 'no-store' }
  );

  const newsRes = (await res.json()) as News.IResponse;
  let latestNews: News.Item[] = [];
  if (newsRes.status === 'success') {
    latestNews = newsRes.results.map(item => (
      {
        id: item.article_id,
        title: item.title,
        img: item.image_url,
        content: item.description
      }
    ));
  } else {
    // triggering notFound manually
    // notFound();
  }

  // throw new Error("Something went wrong while fetching the News from server [xa2658]");

  // The goal of the promise below is to make the response slower (just to demo loading status) 
  return new Promise((resolve) => setTimeout(() => {
    resolve(latestNews);
  }, 1000));
}

export {
  fetchNews,
  getNews
}