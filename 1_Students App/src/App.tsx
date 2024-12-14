import { useState } from 'react';
import './App.css'
import Student from './components/student/student.component';
import { IStudent } from './types';

const COURSES_LIST: string[] = ['React', 'HTML', 'CSS'];
const INITIAL_LIST: Array<IStudent> = [
  {
    id: "2401",
    name: "Ahmad Saeed",
    age: 18,
    isGraduated: false,
    coursesList: ["Math", "English L1"]
  },
  {
    id: "2402",
    name: "Hiba Jameel",
    age: 20,
    isGraduated: false,
    coursesList: ["Web Dev", "Science", "React", "Science", "HTML"],
  },
  {
    id: "2403",
    name: "Waleed Fadi",
    age: 23,
    isGraduated: true,
    coursesList: COURSES_LIST,
  },
  {
    id: "2404",
    name: "Sarah Waheed",
    age: 19,
    isGraduated: true,
    coursesList: COURSES_LIST,
  },
  {
    id: "2405",
    name: "Mohammad Ahmad",
    age: 22,
    isGraduated: true,
    coursesList: COURSES_LIST,
  },
];

const x = 10;
function App() {
  const [studentsList, setStudentsList] = useState<IStudent[]>(INITIAL_LIST);

  const removeLast = () => {
    const newList = [...studentsList];
    newList.shift();  // removes the first item
    setStudentsList(newList);
  }

  return (
    <div>
      <h1 style={{ color: '#a3ff55' }}>Welcome to GSG React/Next Course</h1>
      <button onClick={removeLast}>Remove First Student</button>
      {
        studentsList.map(student => (
          <Student
            key={student.id}
            id={student.id}
            name={student.name}
            age={student.age}
            isGraduated={student.isGraduated}
            coursesList={student.coursesList}
          />
        )
        )
      }
    </div>
  )
}

export default App;