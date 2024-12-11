import CoursesList from '../courses-list/courses-list.component';
import './student.css';

interface IProps {
  name: string;
  age: number;
  isGraduated: boolean;
  coursesList: string[];
}

const Student = (props: IProps) => {
  // console.log(props);
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
      <CoursesList list={props.coursesList} />
      <hr />
    </div>
  )
}

export default Student;