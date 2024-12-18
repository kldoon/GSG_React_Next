import { useState } from 'react';
import './add-form.css';
import { IStudent } from '../../types';

const AddForm = () => {
  const [student, setStudent] = useState<IStudent>({ age: 0, coursesList: [], id: '', isGraduated: false, name: '' });
  const handleChange = (field: string, value: any) => {
    setStudent({ ...student, [field]: value });

    // if (field === 'name') {
    //   setStudent({ ...student, name: value });
    // } else if (field === 'age') {
    //   setStudent({ ...student, age: value });
    // } else if (field === 'isGraduated') {
    //   setStudent({ ...student, isGraduated: value });
    // }
  }

  return (
    <div>
      <h3>{student.name}</h3>
      <h3>{student.age}</h3>
      <h3>{student.isGraduated.toString()}</h3>
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
          onChange={e => handleChange('age', e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="isGraduated">Is Student Graduated: </label>
        <input
          id="isGraduated"
          type="checkbox"
          onChange={e => handleChange('isGraduated', e.target.checked)}
        />
      </div>
    </div>
  )
};

export default AddForm;