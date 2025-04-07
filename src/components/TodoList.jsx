import React from 'react';
import Todo from './Todo';
import styled from 'styled-components';

const ListWrapper = styled.div`
  margin-top: 2rem;
`;

const Remaining = styled.h3`
  font-weight: bold;
`;

const TodoList = ({ todos }) => {
  const remaining = todos.length;

  return (
    <ListWrapper>
      <Remaining>{remaining} tasks remaining</Remaining>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ListWrapper>
  );
};


export default TodoList;
