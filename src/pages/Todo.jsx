// src/pages/Todo.jsx

import { TodoProvider } from "../contexts/TodoContext";
import AddTodo from "../components/AddTodo";
import Category from "../components/Category";
import TodoList from "../components/TodoList";
import styled from "styled-components";
import Header from "../components/Header";

const PageWrapper = styled.div`
  min-height: 100vh;
  background-color: #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  max-width: 600px;
  width: 90%;
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  min-height: 700px;
`;

function Todo() {
  return (
    <TodoProvider>
      <PageWrapper>
        <Container>
          <Header />
          <AddTodo />
          <Category />
          <TodoList />
        </Container>
      </PageWrapper>
    </TodoProvider>
  );
}

export default Todo;
