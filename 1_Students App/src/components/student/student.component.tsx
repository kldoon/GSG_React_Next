import './student.css';
import { IStudent } from '../../types';
import CoursesList from '../courses-list/courses-list.component';
import { Link } from 'react-router-dom';
import Absents from '../absents/absents.component';

interface IProps extends IStudent {
  mode: 'details' | 'list';
  onAbsentChange?: (id: string, change: number) => void;
}

const Student = (props: IProps) => {
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
        props.mode === 'list' && <Absents onAbsentChange={props.onAbsentChange} {...props} />
      }
    </div>
  )
}

export default Student;