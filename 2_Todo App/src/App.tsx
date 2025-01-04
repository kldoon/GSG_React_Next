import { useCallback, useEffect, useReducer, useRef, useState } from 'react'
import './App.css'
import Dashboard from './components/dashboard/dashboard-component'
import Form from './components/form/form.component'
import TodoList from './components/todo-list/todo-list.component'
import { ITodoItem } from './components/types'
import useLocalStorage from './hooks/local-storage.hook'
import reducer from './state/reducer'

function App() {
  const [date, setDate] = useState('');
  const timerRef = useRef<number>();
  const [state, dispatch] = useReducer(reducer, { todos: [], userName: 'Ahmad' });

  const { storedData } = useLocalStorage(state.todos, 'todo-list');

  useEffect(() => {
    dispatch({ type: 'INIT_TODOS', payload: storedData || [] });
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
    dispatch({ type: 'ADD_TODO', payload: item });
  }, [state.todos]);

  const handleTaskToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const itemId = Number(e.target.dataset["itemId"]);
    dispatch({ type: 'TOGGLE_TODO', payload: itemId });
  }

  const handleDelete = (index: number) => {
    // This will delete the item at index!
    const itemId = state.todos[index].id;
    dispatch({ type: 'REMOVE_TODO', payload: itemId });
  }

  console.log('Re render [App]');

  return (
    <div>
      <h1>Todo App - Hello {state.userName} - {date} <button onClick={stopTime}>Stop</button></h1>
      <Form onSubmit={handleNewItem} />
      <Dashboard items={state.todos} />
      <TodoList items={state.todos} onToggle={handleTaskToggle} onDelete={handleDelete} />
    </div>
  )
}

export default App
