import React, { useState } from 'react'
import styled from 'styled-components'

const AddTodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

const StyledText = styled.h2`
  text-align: center;
  display: flex;
`

const StyledInput = styled.input`
  width: 500px;
  padding: 14px;
  border-radius: 0px;
  margin-bottom: 8px;
`

const StyledButton = styled.button`
  background-color: black;
  color: white;
  width: 532px;
  padding: 9px;
  border: none;
  border-radius: 0px;
  margin-bottom: 8px;
`

type AddTodoProps ={
  onAddTodo: (todo: string) => void;
};

const AddTodo: React.FC<AddTodoProps> =({onAddTodo}) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleAddClick = () => {
    onAddTodo(inputValue)
    setInputValue('');
  };

  return (
    <AddTodoContainer>
      <StyledText>What needs to be done?</StyledText>
      <StyledInput
        type='text'
        placeholder='Add a task'
        value={inputValue}
        onChange={handleInputChange}
      />
      <StyledButton onClick={handleAddClick}>Add</StyledButton>
    </AddTodoContainer>
  )
}

export default AddTodo
