import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './common/Button.jsx';

const AddWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 1.5rem 0;
  justify-content: center;
`;

const Input = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  flex: 1;
  max-width: 600px;
  height: 200px;
  line-height: 1.5rem;
  border: 1px solid black;
`;


const AddTodo = ({ setTodos }) => {
  const [text, setText] = useState('');

  const handleAdd = () => {
    if (text.trim() === '') return;
    setTodos((prev) => [
      ...prev,
      {
        id: Date.now(),
        text,
        completed: false,
        isEditing: false,
      },
    ]);
    setText('');
  };

  return (
    <AddWrapper>
      <Input
        type="text"
        placeholder="내용을 입력해주세요."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button variant="add" onClick={handleAdd}>Add</Button>
    </AddWrapper>
  );
};

export default AddTodo;
