import { useState } from 'react';
import './add-form.css';
import { IStudent } from '../../types';
import CoursesListForm from '../courses-list-form/courses-list-form.component';

const INITIAL_STUDENT = { age: 0, coursesList: [], id: '', isGraduated: false, name: '' };

interface IProps {
  onSubmit: (std: IStudent) => void;
}

const AddForm = (props: IProps) => {
  const [student, setStudent] = useState<IStudent>(INITIAL_STUDENT);

  const handleChange = (field: string, value: any) => {
    setStudent({ ...student, [field]: value });
  }

  const handleSubmit = () => {
    const newStudent: IStudent = { ...student, id: Date.now().toString() };
    props.onSubmit(newStudent);
    handleClear();
  }

  const handleClear = () => {
    setStudent(INITIAL_STUDENT);
  }

  const handleCoursesChange = (list: string[]) => {
    setStudent({ ...student, coursesList: list });
  }

  return (
    <div>
      <div>
        <label htmlFor="name">Student Name: </label>
        <input
          id="name"
          type="text"
          value={student.name}
          onChange={e => handleChange('name', e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="age">Student Age: </label>
        <input
          id="age"
          type="number"
          min={17}
          max={40}
          value={student.age}
          onChange={e => handleChange('age', e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="isGraduated">Is Student Graduated: </label>
        <input
          id="isGraduated"
          type="checkbox"
          checked={student.isGraduated}
          onChange={e => handleChange('isGraduated', e.target.checked)}
        />
      </div>
      <div>
        <CoursesListForm value={student.coursesList} onSubmit={handleCoursesChange} />
      </div>
      <div className="Actions">
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={handleClear}>Clear</button>
      </div>
      <br /><br />
    </div>
  )
};

export default AddForm;