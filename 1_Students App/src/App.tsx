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
    setTotalAbsents(totalAbsents + change);
  }

  const handleAddStudent = (newStudent: IStudent) => {
    setStudentsList([newStudent, ...studentsList]);
  }

  return (
    <div className="main wrapper">
      <div className="container">
        <div className="main-form">
          <h1>Student Form</h1>
          <AddForm className="addForm" onSubmit={handleAddStudent} />
        </div>
        <div className='stats'>
          <button onClick={removeFirst}>POP Student</button>
          <b>Total Absents: {totalAbsents}</b>
        </div>
        <div className="student-cards">
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
      </div>
    </div>
  )
}

export default App;