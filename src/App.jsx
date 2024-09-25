import React, { useState } from 'react';
import TodoName from './Components/TodoName';
import AddTodo from './Components/AddTodo';
import Table from './Components/Table';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addNewTodo = (title, date, desc) => {
    const newTodo = {
      id: Date.now(),
      title,
      date,
      desc,
      completed: false
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleDone = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <>
      <TodoName />
      <AddTodo onAdd={addNewTodo} />
      <Table todos={todos} onDelete={deleteTodo} onDone={handleDone} />
    </>
  );
};

export default App;
