import { useEffect, useState } from 'react';
import { IStudent } from '../../types';
import CoursesList from '../courses-list/courses-list.component';
import './student.css';

interface IProps extends IStudent {
  onAbsentChange: (id: string, change: number) => void;
}

const Student = (props: IProps) => {
  const [absents, setAbsents] = useState(props.absents);
  useEffect(() => {
    console.log("Hello from Student component!");

    // The code in this function will be called on the unmount
    return () => {
      console.log(`Student ${props.name}, has been deleted! `);
      // if (confirm("Do you want to back up the item before deletion!")) {
      //   localStorage.setItem('back-up', JSON.stringify(props));
      // }
    };
  }, []);

  const addAbsent = () => {
    setAbsents(absents + 1);
    props.onAbsentChange(props.id, +1);
  }

  const removeAbsent = () => {
    if (absents - 1 >= 0) {
      setAbsents(absents - 1);
      props.onAbsentChange(props.id, -1);
    }
  }

  const resetAbsent = () => {
    setAbsents(0);
    props.onAbsentChange(props.id, -absents);
  }

  return (
    <div className="std-wrapper">
      <div className="data-field">
        <b>Student:</b> {props.name.toUpperCase() + '!'}
      </div>
      <div className="data-field">
        <b>Age:</b> {props.age}
      </div>
      <div className="data-field" style={{ color: props.isGraduated ? 'green' : 'orange' }}>
        <b>Is Graduated:</b> {props.isGraduated ? 'Yes' : 'No'}
      </div>
      <div className="data-field">
        <b>Courses List:</b>
        <CoursesList list={props.coursesList} />
      </div>
      <div className="absents">
        <b>Absents:</b> {absents}
        <button onClick={addAbsent}>+</button>
        <button onClick={removeAbsent}>-</button>
        <button onClick={resetAbsent}>Reset</button>
      </div>
    </div>
  )
}

export default Student;