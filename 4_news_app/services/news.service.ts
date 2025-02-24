import { notFound } from "next/navigation";

const api_key = 'pub_69675b359f778a6ecbb631d39cbd30af4c4f7';

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
    notFound();
  }

  throw new Error("Something went wrong while fetching the News from server [xa2658]");

  // The goal of the promise below is to make the response slower (just to demo loading status) 
  return new Promise((resolve) => setTimeout(() => {
    resolve(latestNews);
  }, 1000));
}

export {
  fetchNews
}