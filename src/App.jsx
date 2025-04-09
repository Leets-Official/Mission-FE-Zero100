import styled from "styled-components";
import Header from "./component/Header";
import AddTodo from "./component/AddTodo";
import Category from "./component/Category";
import TodoList from "./component/TodoList";
import { useState } from "react";

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;

  @media (max-width: 768px) and (orientation: portrait) {
    max-width: 90%;
    padding: 1.5rem;
  }

  @media (max-width: 480px) and (orientation: portrait) {
    padding: 1rem;
  }
`;

function App() {
  const [todos, setTodos] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");

  const handleAddTodo = (text) => {
    if (text.trim() === "") return;
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  return (
    <Container>
      <Header />
      <AddTodo onAddTodo={handleAddTodo} />
      <Category activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      <TodoList todos={todos} setTodos={setTodos} activeCategory={activeCategory} />
    </Container>
  );
};

export default App;
