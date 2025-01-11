import './add-form.css';
import { useEffect, useState } from 'react';
import { IStudent } from '../../types';
import CoursesListForm from '../courses-list-form/courses-list-form.component';
import { validateStudent } from '../../utils/validation.ts';
import { useNavigate } from 'react-router-dom';

const INITIAL_STUDENT = { age: 0, coursesList: [], id: '', isGraduated: false, name: '', absents: 0 };

interface IProps {
  className?: string;
  onSubmit: (std: IStudent) => void;
}

const AddForm = (props: IProps) => {
  const [student, setStudent] = useState<IStudent>(INITIAL_STUDENT);
  const [isOpen, setIsOpen] = useState(true);
  const [errorsList, setErrorsList] = useState<string[]>([]);
  const [message, setMessage] = useState('');
  const nav = useNavigate();

  useEffect(() => {
    console.log("Hello from Add Form component!");
  }, []);

  const handleChange = (field: string, value: any) => {
    setStudent({ ...student, [field]: value });
  }

  const handleSubmit = () => {
    const newStudent: IStudent = { ...student, id: Date.now().toString() };

    const errors = validateStudent(newStudent);
    if (errors.length > 0) {
      setErrorsList(errors);
    } else {
      setErrorsList([]);
      props.onSubmit(newStudent);
      handleClear();
      setMessage('Student Added Successfully');
      setTimeout(() => {
        nav('/');
      }, 1500);
    }
  }

  const handleClear = () => {
    setStudent(INITIAL_STUDENT);
  }

  const handleCoursesChange = (list: string[]) => {
    setStudent({ ...student, coursesList: list });
  }

  return (
    <div className={`wrapper ${props.className} ${isOpen ? 'open' : 'closed'}`}>
      <button className='toggle-btn' onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <span>&and; Close </span> : <span>&or; Open </span>}
        Add Form
      </button>
      <div className="input">
        <label htmlFor="name">Student Name: </label>
        <input
          id="name"
          type="text"
          value={student.name}
          onChange={e => handleChange('name', e.target.value)}
        />
      </div>
      <div className="input">
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
      <div className="input">
        <label htmlFor="isGraduated">Is Graduated: </label>
        <input
          id="isGraduated"
          type="checkbox"
          checked={student.isGraduated}
          onChange={e => handleChange('isGraduated', e.target.checked)}
        />
      </div>
      <CoursesListForm value={student.coursesList} onSubmit={handleCoursesChange} />
      <div className="Actions">
        <button
          onClick={handleSubmit}
          style={{ color: errorsList.length ? 'red' : 'initial' }}
        >
          Submit
        </button>
        <button onClick={handleClear}>Clear</button>
      </div>
      {
        Boolean(errorsList.length) && (
          <div className='report'>
            <h4>You have the following error/s:</h4>
            {
              errorsList.map(error => <p key={error}>- {error}</p>)
            }
          </div>
        )
      }
      {Boolean(message) && <h4>{message}</h4>}
    </div>
  )
};

export default AddForm;