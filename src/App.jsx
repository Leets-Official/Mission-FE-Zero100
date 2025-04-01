// src/App.jsx
import React, { useState } from "react";
import styled from "styled-components";
import AddTodo from "./components/AddTodo.jsx";
import TodoList from "./components/TodoList.jsx";
import Category from "./components/Category.jsx";
import Header from "./components/Header.jsx"; // 있으면 추가

const SubTitle = styled.p`
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

// ✅ 전체 레이아웃 스타일
const AppWrapper = styled.div`
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  padding: 2rem;
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
      <Header />
      <SubTitle>What needs to be done?</SubTitle>
      <AddTodo setTodos={setTodos} />
      <Category filter={filter} setFilter={setFilter} />
      <TodoList
        todos={filteredTodos}
        onToggle={handleToggle}
        onDelete={handleDelete}
        onEdit={handleEdit}
        onSave={handleSave}
      />
    </AppWrapper>
  );
};

export default App;
