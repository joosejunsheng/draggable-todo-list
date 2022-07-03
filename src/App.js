import './App.css';
import React, { useState } from 'react';
import TodoList from './Todo/TodoList';

function App() {

  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="todo-app">
        <h1>Todo App</h1>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
