import { Trash } from '@phosphor-icons/react';
import './todo-item.css'
import { ITodoItem } from '../types';

interface IProps {
  data: ITodoItem
  onToggle: (e: React.ChangeEvent<HTMLInputElement>) => void
  onDelete: () => void
};

const TodoItem = ({ data, onToggle, onDelete }: IProps) => {
  return (
    <div className="item-wrapper">
      <input type="checkbox" checked={data.isDone} onChange={onToggle} data-item-id={data.id} />
      <span>{data.title}</span>
      <span><Trash size={24} color="#cf2020" weight="fill" onClick={onDelete} /></span>
      <span>isUrgent: {data.isUrgent.toString()}</span>
    </div>
  )
}

export default TodoItem;