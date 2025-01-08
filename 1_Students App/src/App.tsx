import './App.css'
import Main from './screens/Main.screen';
import About from './screens/About.screen';
import NotFound from './screens/NotFound.screen';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import StudentDetails from './screens/StudentDetails.screen';

function App() {
  const h1Style = { color: '#69247C', fontSize: '24px' };

  return (
    <div className="main wrapper">
      <h1 style={h1Style}>Welcome to GSG React/Next Course</h1>
      <BrowserRouter>
        <nav>
          <Link to='/'>Home Page</Link>
          <Link to='/about'>About App</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/about' element={<About />} />
          <Route path='/student/:id' element={<StudentDetails />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;