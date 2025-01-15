import React, { useContext } from 'react';
import './form.css';
import { ITodoItem } from '../types';
import { ThemeContext } from '../../main';

interface IProps {
  onSubmit: (item: ITodoItem) => void;
}

const Form = React.memo((props: IProps) => {
  const { theme } = useContext(ThemeContext);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const title: string = e.currentTarget["task"].value;
    const isUrgent: boolean = e.currentTarget["urgent"].checked;
    if (title.length > 3) {
      const newTask: ITodoItem = {
        id: Date.now(),
        title,
        isUrgent,
        isDone: false
      }

      props.onSubmit(newTask);
    }
  }

  return (
    <form className={`form-wrapper ${theme}`} onSubmit={handleSubmit}>
      <input className="task-input" type="text" name="task" placeholder="Type todo here..." />
      <div>
        <input type="checkbox" id="urgent" name="urgent" />
        <label htmlFor="urgent">Urgent</label>
      </div>
      <input className="submit" type="submit" value="Add Todo" />
    </form>
  )
});

export default Form;