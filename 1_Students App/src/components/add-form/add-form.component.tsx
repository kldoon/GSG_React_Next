import { useState } from 'react';
import './add-form.css';

const AddForm = () => {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [isGraduated, setIsGraduated] = useState<boolean>(false);

  // const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setName(e.target.value)
  // }

  return (
    <div>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{isGraduated.toString()}</h3>
      <div>
        <label htmlFor="name">Student Name: </label>
        <input
          id="name"
          type="text"
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="age">Student Age: </label>
        <input
          id="age"
          type="number"
          min={17}
          max={40}
          onChange={e => setAge(Number(e.target.value))}
        />
      </div>
      <div>
        <label htmlFor="isGraduated">Is Student Graduated: </label>
        <input
          id="isGraduated"
          type="checkbox"
          onChange={e => setIsGraduated(e.target.checked)}
        />
      </div>
    </div>
  )
};

export default AddForm;