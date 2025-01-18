import './App.css'
import Main from './screens/Main.screen';
import About from './screens/About.screen';
import NotFound from './screens/NotFound.screen';
import { Route, Routes } from 'react-router-dom';
import StudentDetails from './screens/StudentDetails.screen';
import { Role } from './types';
import AddStudent from './screens/AddStudent.screen';
import Login from './screens/Login.screen';
import NavBar from './components/nav-bar/nav-bar.component';
import Guarded from './components/common/guarded-route/guarded-route.component';

function App() {
  const h1Style = { color: '#69247C', fontSize: '24px' };

  return (
    <div className="main wrapper">
      <h1 style={h1Style}>Welcome to GSG React/Next Course</h1>
      <NavBar />
      <Routes>
        <Route path='/' element={<Guarded roles={[Role.ADMIN, Role.Teacher, Role.GUEST]}><Main /></Guarded>} />
        <Route path='/add' element={<Guarded roles={[Role.ADMIN]}><AddStudent /></Guarded>} />
        <Route path='/about' element={<About />} />
        <Route path='/student/:id' element={<Guarded roles={[Role.ADMIN, Role.Teacher]}><StudentDetails /></Guarded>} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App;