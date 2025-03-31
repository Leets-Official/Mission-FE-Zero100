import React from 'react'
import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
`;

const StyledInput = styled.input`
  width: 500px;
  padding: 14px;
  border-radius: 0px;

`;
const StyledButton = styled.button`
  background-color: black;
  color: white;
  width: 532px;
  padding: 9px;
  border: none;
  border-radius: 0px;
`;

const Input = () => {
  return (
    <InputContainer>
      <StyledInput type="text" placeholder="Add a task" />
      <StyledButton>Add</StyledButton>
    </InputContainer>
  );
};

export default Input;
