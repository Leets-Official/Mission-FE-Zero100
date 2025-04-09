import React, { useState } from "react";
import styled from "styled-components";
import AddTodo from "./components/AddTodo.jsx";
import TodoList from "./components/TodoList.jsx";
import Category from "./components/Category.jsx";
import Header from "./components/Header.jsx"; 
import { TodoContext } from './context/TodoContext';


const SubTitle = styled.p`
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const AppWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem 1rem; // 상하 2rem, 좌우 1rem
  background-color: #fff;
  border: 1px solid lightgray;
`;

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Eat', completed: false, isEditing: false },
    { id: 2, text: 'Sleep', completed: false, isEditing: false },
    { id: 3, text: 'Repeat', completed: false, isEditing: false },
  ]);

  const [filter, setFilter] = useState('all');

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const handleToggle = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleEdit = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isEditing: true } : todo
      )
    );
  };

  const handleSave = (id, newText) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? { ...todo, text: newText, isEditing: false }
          : todo
      )
    );
  };

  return (
    <AppWrapper>
      <TodoContext.Provider
        value={{
          onToggle: handleToggle,
          onDelete: handleDelete,
          onEdit: handleEdit,
          onSave: handleSave,
        }}
      >
        <Header />
        <SubTitle>What needs to be done?</SubTitle>
        <AddTodo setTodos={setTodos} />
        <Category filter={filter} setFilter={setFilter} />
        <TodoList todos={filteredTodos} />
      </TodoContext.Provider>
    </AppWrapper>
  );
};

export default App;
