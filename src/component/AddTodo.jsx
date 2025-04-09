import { useState } from 'react'
import styled from 'styled-components'
import Text from './Text'
import Input from './Input'
import Button from './Button'

const Container = styled.div`
  margin-bottom: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const InputContainer = styled.div`
  width: 100%;
  max-width: 500px;
  margin-bottom: 5px;
`

const StyledButton = styled(Button)`
  width: 100%;
  max-width: 500px;
  padding: 8px;
  background-color: black;
  color: white;
  font-weight: bold;
  margin-top: 5px;
  cursor: pointer;
`

const AddTodo = ({ onAdd }) => {
  const [value, setValue] = useState('')

  const handleAdd = () => {
    const trimmed = value.trim()
    if (trimmed) {
      onAdd(trimmed)
      setValue('')
    }
  }

  const handlekeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAdd()
    }
  }

  return (
    <Container>
      <Text style={{ marginBottom: '20px', textAlign: 'center', fontSize: '18px' }}>
        What needs to be done?
      </Text>
      <InputContainer>
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handlekeyDown}
          style={{
            width: '100%',
            height: '55px',
            border: '1.5px solid #000',
            boxSizing: 'border-box',
          }}
        />
      </InputContainer>
      <StyledButton onClick={handleAdd}>Add</StyledButton>
    </Container>
  )
}
export default AddTodo
