import { useState } from 'react';
import { IStudent } from '../../types';
import CoursesList from '../courses-list/courses-list.component';
import './student.css';

interface IProps extends IStudent {
  onAbsentChange: (name: string, change: number) => void;
}

const Student = (props: IProps) => {
  const [absents, setAbsents] = useState(0);

  const addAbsent = () => {
    setAbsents(absents + 1);
    props.onAbsentChange(props.name, +1);
  }

  const removeAbsent = () => {
    if (absents - 1 >= 0) {
      setAbsents(absents - 1);
      props.onAbsentChange(props.name, -1);
    }
  }

  const resetAbsent = () => {
    setAbsents(0);
    props.onAbsentChange(props.name, -absents);
  }

  return (
    <div className="std-wrapper">
      <div className="data-field">
        <b>Student:</b> {props.name.toUpperCase() + '!'}
      </div>
      <div className="data-field">
        <b>Age:</b> {props.age}
      </div>
      <div className="data-field">
        <b>Is Graduated:</b> {props.isGraduated ? 'Yes' : 'No'}
      </div>
      <div className="data-field data-field-list">
        <b>Courses List:</b>
        <CoursesList list={props.coursesList} />
      </div>
      <div className="absents">
        <div className="data-field">
          <b>Absents:</b> {absents}
        </div>
        <div className="absents-btns">
          <button onClick={addAbsent}>+</button>
          <button onClick={removeAbsent}>-</button>
          <button onClick={resetAbsent}>Reset</button>
        </div>
      </div>
    </div>
  )
}

export default Student;