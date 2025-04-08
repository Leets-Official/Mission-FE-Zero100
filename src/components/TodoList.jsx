import React from 'react';
import Todo from './Todo';
import styled from 'styled-components';

//<Todo /> 목록 전체를 감싸는 박스
const ListWrapper = styled.div`
  margin-left: 2.6rem;      // ✅ All 버튼의 왼쪽 위치와 맞춤 (조정 가능)
  text-align: left;
  margin-bottom: 1rem;
`;

// n tasks remaining
const Remaining = styled.h3`
  font-size: 2rem;
  margin: 0.1rem 0.7rem 0; 
  text-align: left;  
  color: #444;    
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
