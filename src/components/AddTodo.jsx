import { useState } from "react";
import { useTodo } from "../contexts/TodoContext";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;
  margin-top: 0;
`;

const Input = styled.input`
  padding: 1.2rem;
  font-size: 1.1rem;
  border: 2px solid black;
`;

const Button = styled.button`
  background: black;
  color: white;
  font-size: 1rem;
  padding: 0.7rem 1rem;
  border: none;
  cursor: pointer;
`;

function AddTodo() {
  const { addTask } = useTodo();
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    addTask(input);
    setInput("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="Please enter a task."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button type="submit">Add</Button>
    </Form>
  );
}

export default AddTodo;