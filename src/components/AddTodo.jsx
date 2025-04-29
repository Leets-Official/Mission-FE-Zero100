import React, { useState } from 'react'
import styled from 'styled-components'
import Button from './common/Button.jsx'
import { v4 as uuidv4 } from 'uuid'

const AddWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 1rem 0;
  justify-content: center;
`

const Input = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  width: 500px;
  height: 60px;
  line-height: 1.5rem;
  border: 2px solid black;
  box-sizing: border-box;
  margin-left: 2rem;
`

const AddTodo = ({ setTodos }) => {
  const [text, setText] = useState('')

  const handleAdd = () => {
    if (text.trim() === '') return
    setTodos((prev) => [
      ...prev,
      {
        id: uuidv4(),
        text,
        completed: false,
        isEditing: false,
      },
    ])
    setText('')
  }

  return (
    <AddWrapper>
      <Input
        type='text'
        placeholder='내용을 입력해주세요.'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button variant='add' onClick={handleAdd}>
        Add
      </Button>
    </AddWrapper>
  )
}

export default AddTodo
