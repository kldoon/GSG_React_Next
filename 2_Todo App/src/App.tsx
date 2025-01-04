import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'
import Dashboard from './components/dashboard/dashboard-component'
import Form from './components/form/form.component'
import TodoList from './components/todo-list/todo-list.component'
import { ITodoItem } from './components/types'
import useLocalStorage from './hooks/local-storage.hook'

function App() {
  const [todos, setTodos] = useState<ITodoItem[]>([]);
  const [date, setDate] = useState('');
  const timerRef = useRef<number>();

  const { storedData } = useLocalStorage(todos, 'todo-list');

  useEffect(() => {
    setTodos(storedData || []);
  }, [storedData]);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setDate(new Date().toLocaleTimeString());
    }, 1000);
  }, []);

  const stopTime = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  }

  const handleNewItem = useCallback((item: ITodoItem) => {
    setTodos([...todos, item]);
  }, [todos]);

  const handleTaskToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const itemId = e.target.dataset["itemId"];
    setTodos(todos.map(item => (item.id === Number(itemId)) ? { ...item, isDone: !item.isDone } : item));
  }

  const handleDelete = (index: number) => {
    // This will delete the item at index!
    setTodos([...todos.slice(0, index), ...todos.slice(index + 1, todos.length)]);
  }

  console.log('Re render [App]');

  return (
    <div>
      <h1>Todo App - {date} <button onClick={stopTime}>Stop</button></h1>
      <Form onSubmit={handleNewItem} />
      <Dashboard items={todos} />
      <TodoList items={todos} onToggle={handleTaskToggle} onDelete={handleDelete} />
    </div>
  )
}

export default App
