import './App.css'
import Main from './screens/Main.screen';
import About from './screens/About.screen';
import NotFound from './screens/NotFound.screen';

function App() {
  const h1Style = { color: '#69247C', fontSize: '24px' };
  const currentPage = window.location.pathname;

  return (
    <div className="main wrapper">
      <h1 style={h1Style}>Welcome to GSG React/Next Course</h1>
      <nav>
        <a href='/'>Home Page</a>
        <a href='/about'>About App</a>
      </nav>
      {
        currentPage === '/'
          ? <Main />
          : currentPage === '/about'
            ? <About />
            : <NotFound />
      }
    </div>
  )
}

export default App;