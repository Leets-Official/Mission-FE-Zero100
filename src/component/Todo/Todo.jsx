import { useState } from 'react'
import styled from 'styled-components'
import Checkbox from '../Common/Checkbox'

const TodoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 10px;
  margin: 10px 0;
  width: 100%;
  margin: 0 auto;
`
const TaskText = styled.span`
  font-size: 20px;
  margin-left: 10px;
`

const EditButton = styled.button`
  background-color: #ffffff;
  color: black;
  padding: 10px 20px;
  flex: 1;
  margin-left: 5px;
  font-size: 16px;
  border: 2px solid black;
  box-sizing: border-box;
`

const DeleteButton = styled.button`
  background-color: #c0392b;
  color: white;
  padding: 10px 20px;
  flex: 1;
  margin-left: 5px;
  font-size: 16px;
  border: none;
  box-sizing: border-box;
`
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 5px;
  flex-grow: 1;
`

const Todo = ({ task }) => {
  const [checked, setChecked] = useState(false) // 체크박스 상태 관리

  const handleCheckboxChange = () => {
    setChecked(!checked) // 체크 상태 변경
  }

  return (
    <TodoContainer>
      <div>
        <Checkbox checked={checked} onChange={handleCheckboxChange} />
        <TaskText>{task}</TaskText>
      </div>
      <ButtonContainer>
        <EditButton>Edit</EditButton>
        <DeleteButton delete>Delete</DeleteButton>
      </ButtonContainer>
    </TodoContainer>
  )
}

export default Todo
