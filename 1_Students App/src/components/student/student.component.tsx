import { useState } from 'react';
import { IStudent } from '../../types';
import CoursesList from '../courses-list/courses-list.component';
import './student.css';

interface IProps extends IStudent {
}

const Student = (props: IProps) => {
  // let absents = 0;
  const [absents, setAbsents] = useState(0);

  const addAbsent = () => {
    // absents = absents + 1;
    setAbsents(absents + 1);

    /////
    // setAbsents((oldValue) => { return oldValue + 1 });
    // setAbsents(oldValue => oldValue + 1);
    // setAbsents(oldValue => oldValue + 1);
  }

  const removeAbsent = () => {
    if (absents - 1 >= 0) {
      setAbsents(absents - 1);
    }
  }

  const resetAbsent = () => {
    setAbsents(0);
  }

  return (
    <div className='std-wrapper'>
      <div>
        <b>Student:</b> {props.name.toUpperCase() + '!'}
      </div>
      <div>
        <b>Age:</b> {props.age}
      </div>
      <div>
        <b>Is Graduated:</b> {props.isGraduated ? 'Yes' : 'No'}
      </div>
      <div>
        <b>Absents:</b> {absents}
        <button onClick={addAbsent}>+</button>
        <button onClick={removeAbsent}>-</button>
        <button onClick={resetAbsent}>Reset</button>
      </div>
      <CoursesList list={props.coursesList} />
      <hr />
    </div>
  )
}

export default Student;