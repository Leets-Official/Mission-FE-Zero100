import styled from 'styled-components'
import CheckBox from './CheckBox'
import Button from './Button'

const TodoItem = styled.li`
  margin-bottom: 5px;
  padding: 10px;
  padding-left: 0;
  border-radius: 6px;
  width: 100%;
`

const Label = styled.label`
  margin: 0;
  padding: 0;
  font-size: 16px;
`

const Top = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  width: 100%;
`

const Bottom = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 6px;
  font-weight: bold;
  width: 100%;
  padding-left: 0;
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

const Todo = ({ id, label, onDelete, isChecked }) => {
  console.log('label:', label)
  return (
    <TodoItem>
      <Top>
        <CheckBox id={id} isChecked={isChecked} />
        <Label htmlFor={id}>{label}</Label>
      </Top>
      <Bottom>
        <EditButton>Edit</EditButton>
        <DeleteButton onClick={() => onDelete(id)}>Delete</DeleteButton>
      </Bottom>
    </TodoItem>
  )
}
export default Todo
