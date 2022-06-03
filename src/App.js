import './App.css';
import React, { useState } from 'react';
import TodoList from './todo/TodoList';

function App() {

  const [count, setCount] = useState(0);

  return (
    <div className="todo-app">
      <h1>Todo App</h1>
      <TodoList />
    </div>
  );
}

export default App;
