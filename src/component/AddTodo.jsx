import React from 'react'
import styled from 'styled-components'
import Text from './Text'
import Button from './Button'
import Input from './Input.jsx'

const AddTodoContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const StyledInput = styled.input`
  width: 80%;
  height: 70px;
  font-size: 16px;
  padding: 15px;
  margin: 0;
  box-sizing: border-box;
`
//요소의 너비와 높이를 계산할 때 패딩과 보더를 포함하겠다는 뜻
//width: Add 버튼과 index 상자 크기가 width:80%으로 설정해도 다른 문제 해결을 위한 코드

const AddButton = styled(Button)`
  margin-top: 10px;
  width: 80%;
  background-color: black;
  color: white;
`

const AddTodo = ({ task, setText, handleAdd }) => {
  return (
    <AddTodoContainer>
      <Text style={{ fontSize: '20px', marginBottom: '10px' }}>
        What needs to be done?
      </Text>
      <StyledInput value={task} onChange={(e) => setText(e.target.value)} />{' '}
      <AddButton onClick={handleAdd}>Add</AddButton>
    </AddTodoContainer>
  )
}

export default AddTodo
