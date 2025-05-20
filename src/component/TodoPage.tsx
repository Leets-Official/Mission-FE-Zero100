import styled from "styled-components";
import Header from "./Header";
import AddTodo from "./AddTodo";
import Category from "./Category";
import TodoList from "./TodoList";
import { useState } from "react";
import { useEffect } from "react";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
  isEditing: boolean;
};

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

const TodoPage: React.FC =() => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [activeCategory, setActiveCategory] = useState<"All" | "Active" | "Completed">("All");

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

  const handleAddTodo = (text: string) => {
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

export default TodoPage;
