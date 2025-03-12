import { useState } from 'react'

import './App.css'

function App() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [newsList, setNewsList] = useState<any[]>([]);

  const fetchNews = () => {
    fetch('http://127.0.0.1:3000/api/news?category=palestine')
      .then(res => res.json())
      .then(res => setNewsList(res.results));
  }

  const submitNews = () => {
    fetch('http://127.0.0.1:3000/api/news?category=palestine', {
      method: 'POST',
      body: JSON.stringify({
        "message": "hi from FE"
      })
    })
      .then(res => res.json())
      .then(res => setNewsList(res.results));
  }

  const loadArticle = (slug: string) => {
    fetch(`http://127.0.0.1:3000/api/news/${slug}123`)
      .then(res => res.json())
      .then(res => console.log(res));
  }

  return (
    <div>
      <h1>UI for testing the APIs</h1>
      <div className="card">
        <button onClick={fetchNews}>
          Fetch News
        </button>
        <button onClick={submitNews}>
          Submit News
        </button>
        <hr />
        <ul>
          {
            newsList.map(item => <li key={item.id} onClick={() => loadArticle(item.slug)}>{item.title}</li>)
          }
        </ul>
      </div>
    </div>
  )
}

export default App
