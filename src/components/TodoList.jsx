import React from 'react';
import Todo from './Todo';
import styled from 'styled-components';

const ListWrapper = styled.div`
  margin-top: 2rem;
  padding: 0 1rem; /* 좌우 패딩 추가 */
`;

const Remaining = styled.h3`
  font-weight: bold;
  margin-left: 1.1rem; /* 혹은 동일한 padding 사용 */
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
