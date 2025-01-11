import './App.css'
import Main from './screens/Main.screen';
import About from './screens/About.screen';
import NotFound from './screens/NotFound.screen';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import StudentDetails from './screens/StudentDetails.screen';
import { useState, useEffect } from 'react';
import useLocalStorage from './hooks/local-storage.hook';
import { IStudent } from './types';
import AddStudent from './screens/AddStudent.screen';

function App() {
  const h1Style = { color: '#69247C', fontSize: '24px' };

  const [studentsList, setStudentsList] = useState<IStudent[]>([]);
  const [totalAbsents, setTotalAbsents] = useState(0);
  const location = useLocation();

  const { storedData } = useLocalStorage(studentsList, 'students-list');

  useEffect(() => {
    const stdList: IStudent[] = storedData || [];
    const totalAbs = stdList.reduce((prev, cur) => { return prev + cur.absents }, 0);
    setTotalAbsents(totalAbs);
    setStudentsList(stdList);
  }, [storedData]);

  const removeFirst = () => {
    const newList = [...studentsList];
    newList.shift();  // removes the first item
    setStudentsList(newList);
  }

  const handleAbsentChange = (id: string, change: number) => {
    setTotalAbsents(totalAbsents + change);
    setStudentsList(studentsList.map(std => std.id === id ? { ...std, absents: std.absents + change } : std));
  }

  const handleAddStudent = (newStudent: IStudent) => {
    setStudentsList([newStudent, ...studentsList]);
  }

  return (
    <div className="main wrapper">
      <h1 style={h1Style}>Welcome to GSG React/Next Course</h1>
      <nav>
        <Link to='/' className={location.pathname === '/' ? 'active' : ''}>Home Page</Link>
        <Link to='/add' className={location.pathname === '/add' ? 'active' : ''}>Add Student</Link>
        <Link to='/about' className={location.pathname === '/about' ? 'active' : ''}>About App</Link>
      </nav>
      <Routes>
        <Route path='/' element={
          <Main
            studentsList={studentsList}
            totalAbsents={totalAbsents}
            onAbsent={handleAbsentChange}
            onRemove={removeFirst}
          />
        } />
        <Route path='/add' element={<AddStudent onAdd={handleAddStudent} />} />
        <Route path='/about' element={<About />} />
        <Route path='/student/:id' element={<StudentDetails />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App;