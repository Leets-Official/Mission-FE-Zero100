import styled from "styled-components";
import Header from "./component/Header";
import AddTodo from "./component/AddTodo";
import Category from "./component/Category";
import TodoList from "./component/TodoList";
import { useState } from "react";
import { useEffect } from "react";

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
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const savedTodos = localStorage.getItem("tasks");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
    setIsLoaded(true);
  }, []);

  useEffect(() =>{
    if (isLoaded) {
      localStorage.setItem("tasks", JSON.stringify(todos));
    }
  }, [todos, isLoaded]);

  const handleAddTodo = (text) => {
    if (text.trim() === "") return;
    const newTodo = { id: Date.now(), text, completed: false, isEditing: false };
    setTodos([...todos, newTodo]);
  };

  if (!isLoaded) return <div>Loading... </div>;

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
