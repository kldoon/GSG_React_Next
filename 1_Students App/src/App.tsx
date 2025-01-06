import { useState } from 'react';
import './App.css'
import Main from './screens/Main.screen';
import About from './screens/About.screen';
import NotFound from './screens/NotFound.screen';

function App() {
  const [currentPage, setCurrentPage] = useState('main');
  const h1Style = { color: '#69247C', fontSize: '24px' };

  return (
    <div className="main wrapper">
      <h1 style={h1Style}>Welcome to GSG React/Next Course</h1>
      <nav>
        <button onClick={() => setCurrentPage('main')}>Home Page</button>
        <button onClick={() => setCurrentPage('about')}>About App</button>
      </nav>
      {
        currentPage === 'main'
          ? <Main />
          : currentPage === 'about'
            ? <About />
            : <NotFound />
      }
    </div>
  )
}

export default App;