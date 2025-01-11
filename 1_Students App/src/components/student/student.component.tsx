import { useEffect, useRef, useState } from 'react';
import { IStudent } from '../../types';
import CoursesList from '../courses-list/courses-list.component';
import './student.css';
import { Link } from 'react-router-dom';

interface IProps extends IStudent {
  mode: 'details' | 'list';
  onAbsentChange?: (id: string, change: number) => void;
}

const Student = (props: IProps) => {
  const [absents, setAbsents] = useState(props.absents);
  const [absentColor, setAbsentColor] = useState('#213547');
  const prevAbsents = useRef<number>(props.absents);


  useEffect(() => {
    if (absents >= 10) {
      setAbsentColor('#ff0000');
    } else if (absents >= 7) {
      setAbsentColor('#fd9c0e');
    } else if (absents >= 5) {
      setAbsentColor('#d6c728');
    } else {
      setAbsentColor('#213547');
    }
  }, [absents]);

  const addAbsent = () => {
    prevAbsents.current = absents;
    setAbsents(absents + 1);
    if (props.onAbsentChange) {
      props.onAbsentChange(props.id, +1);
    }
  }

  const removeAbsent = () => {
    if (absents - 1 >= 0) {
      prevAbsents.current = absents;
      setAbsents(absents - 1);
      if (props.onAbsentChange) {
        props.onAbsentChange(props.id, -1);
      }
    }
  }

  const resetAbsent = () => {
    prevAbsents.current = absents;
    setAbsents(0);
    if (props.onAbsentChange) {
      props.onAbsentChange(props.id, -absents);
    }
  }

  return (
    <div className="std-wrapper">
      <div className="data-field">
        <b>Student:</b>
        {
          props.mode === 'list'
            ? <Link to={`/student/${props.id}`}>{props.name.toUpperCase()}</Link>
            : props.name.toUpperCase()
        }
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
      {
        props.mode === 'list' && (
          <div className="absents">
            <b style={{ color: absentColor }}>Prev Absents:</b> {prevAbsents.current}
            <b style={{ color: absentColor }}>Absents:</b> {absents}
            <button onClick={addAbsent}>+</button>
            <button onClick={removeAbsent}>-</button>
            <button onClick={resetAbsent}>Reset</button>
          </div>
        )
      }
    </div>
  )
}

export default Student;