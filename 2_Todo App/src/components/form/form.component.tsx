import React from 'react'
import './form.css'
import { ITodoItem } from '../types';

interface IProps {
  onSubmit: (item: ITodoItem) => void;
}

const Form = (props: IProps) => {
  console.log("Re render [form]");

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
    <form className="form-wrapper" onSubmit={handleSubmit}>
      <input className="task-input" type="text" name="task" placeholder="Type todo here..." />
      <div>
        <input type="checkbox" id="urgent" name="urgent" />
        <label htmlFor="urgent">Urgent</label>
      </div>
      <input className="submit" type="submit" value="Add Todo" />
    </form>
  )
}

export default Form