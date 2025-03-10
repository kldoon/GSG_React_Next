import { useState } from 'react'

import './App.css'

function App() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [newsList, setNewsList] = useState<any[]>([]);

  const fetchNews = () => {
    fetch('http://www.yourwebsite.com/api/news?category=palestine')
      .then(res => res.json())
      .then(res => setNewsList(res.results));
  }

  return (
    <div>
      <h1>UI for testing the APIs</h1>
      <div className="card">
        <button onClick={fetchNews}>
          Fetch News
        </button>
        <hr />
        <ul>
          {
            newsList.map(item => <li key={item.id}>{item.title}</li>)
          }
        </ul>
      </div>
    </div>
  )
}

export default App
