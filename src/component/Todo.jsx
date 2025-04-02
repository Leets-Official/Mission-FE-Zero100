import styled from 'styled-components'
import CheckBox from './CheckBox'
import Text from './Text'
import Button from './Button'

const TodoItem = styled.li`
  margin-bottom: 5px;
  padding: 10px;
  border-radius: 6px;
`

const Label = styled.label`
  font-size: 16px;
`

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`

const Right = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 6px;
  font-weight: bold;
`

const EditButton = styled(Button)`
  flex: 1;
  padding: 5px 15px;
  background-color: white;
  border: 1.5px solid;
  cursor: pointer;
`

const DeleteButton = styled(Button)`
  flex: 1;
  padding: 5px 15px;
  background-color: rgb(190, 55, 55);
  border: rgb(190, 55, 55);
  color: white;
  cursor: pointer;
`

const Todo = ({ id, label, isChecked }) => {
  return (
    <TodoItem>
      <Left>
        <CheckBox id={id} checked={isChecked} />
        <Label htmlFor={id}>{label}</Label>
      </Left>
      <Right>
        <EditButton>Edit</EditButton>
        <DeleteButton>Delete</DeleteButton>
      </Right>
    </TodoItem>
  )
}
export default Todo
