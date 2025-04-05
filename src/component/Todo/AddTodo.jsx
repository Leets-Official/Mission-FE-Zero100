import styled from 'styled-components'
import Text from '../Common/Text.jsx'
import Button from '../Common/Button.jsx'
import Input from '../Common/Input.jsx'
import { useState } from 'react'

const AddTodoContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const AddButton = styled(Button)`
  margin-top: 10px;
  width: 80%;
  background-color: black;
  color: white;
`

const AddTodo = ({ onAdd }) => {
  const [text, setText] = useState('')
  return (
    <AddTodoContainer>
      <Text style={{ fontSize: '20px', marginBottom: '10px' }}>
        What needs to be done?
      </Text>
      <Input value={text} onChange={(e) => setText(e.target.value)} />
      <AddButton
        onClick={() => {
          onAdd(text)
          setText('') //할 일 추가하고 다시 빈 문자열로 설정
        }}
      >
        Add
      </AddButton>
    </AddTodoContainer>
  )
}

export default AddTodo
