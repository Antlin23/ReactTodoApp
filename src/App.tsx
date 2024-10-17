import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './Header';
import Todos from './AddTodo';
import TodoList from './TodoList';


function App() {
  const [todos, setTodos] = useState<Array<{isCompleted: boolean, todoText: string, id:string}>>(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  const [newTodo, setNewTodo] = useState({isCompleted: false, todoText: "", id: Date.now().toString()});

  //saves todos
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      <Header />
      <TodoList todos={todos} setTodos={setTodos}/>
      <Todos todos={todos} setTodos={setTodos} newTodo={newTodo} setNewTodo={setNewTodo} />
    </div>
  );
}

export default App;
