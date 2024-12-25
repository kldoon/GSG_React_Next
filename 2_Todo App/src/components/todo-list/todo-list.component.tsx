import TodoItem from "../todo-item/todo-item.component";
import { ITodoItem } from "../types";
import './todo-list.css';

interface IProps {
  items: ITodoItem[];
  onToggle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDelete: (index: number) => void;
}

const TodoList = (props: IProps) => {
  return (
    <div className="list-wrapper">
      {
        props.items.map((item, index) => (
          <TodoItem
            key={item.id}
            data={item}
            onToggle={props.onToggle}
            onDelete={() => props.onDelete(index)}
          />
        ))
      }
    </div>
  )
}

export default TodoList;