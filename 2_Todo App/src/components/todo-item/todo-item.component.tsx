import { Trash } from '@phosphor-icons/react';
import './todo-item.css'
import { ITodoItem } from '../types';
import { useContext } from 'react';
import { ThemeContext } from '../../main';

interface IProps {
  data: ITodoItem
  onToggle: (e: React.ChangeEvent<HTMLInputElement>) => void
  onDelete: () => void
};

const TodoItem = ({ data, onToggle, onDelete }: IProps) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`item-wrapper ${data.isDone ? 'done' : ''} ${data.isUrgent ? 'urgent' : ''} ${theme}`}>
      <span className="item-details">
        <div className="round-checkbox">
          <input
            type="checkbox"
            id={`checkbox-${data.id}`}
            checked={data.isDone}
            onChange={onToggle}
            data-item-id={data.id}
          />
          <label htmlFor={`checkbox-${data.id}`}></label>
        </div>
        <span>{data.title}</span>
      </span>
      <Trash className="delete" size={20} color="#cf2020" weight="fill" onClick={onDelete} />
    </div>
  )
}

export default TodoItem;