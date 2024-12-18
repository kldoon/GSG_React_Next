import { useState } from 'react';
import './App.css'
import { IStudent } from './types';

import Student from './components/student/student.component';
import AddForm from './components/add-form/add-form.component';

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

function App() {
  const [studentsList, setStudentsList] = useState<IStudent[]>(INITIAL_LIST);
  const [totalAbsents, setTotalAbsents] = useState(0);

  const removeFirst = () => {
    const newList = [...studentsList];
    newList.shift();  // removes the first item
    setStudentsList(newList);
  }

  const handleAbsentChange = (name: string, change: number) => {
    console.log("[App.tsx] Absent changed");
    console.log(`${name}: ${change}`);
    setTotalAbsents(totalAbsents + change);
  }

  return (
    <div>
      <h1 style={{ color: '#a3ff55' }}>Welcome to GSG React/Next Course</h1>
      <AddForm />
      <button onClick={removeFirst}>Remove First Student</button>
      <b>Total Absents {totalAbsents}</b>
      {
        studentsList.map(student => (
          <Student
            key={student.id}
            id={student.id}
            name={student.name}
            age={student.age}
            isGraduated={student.isGraduated}
            coursesList={student.coursesList}
            onAbsentChange={handleAbsentChange}
          />
        )
        )
      }
    </div>
  )
}

export default App;