import styled from 'styled-components'
import CheckBox from './CheckBox'
import Button from './Button'
import { useState } from 'react'

const TodoItem = styled.li`
  margin-bottom: 5px;
  padding: 10px;
  padding-left: 0;
  border-radius: 6px;
  width: 100%;
`

const Label = styled.label`
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

const SaveButton = styled(Button)`
  flex: 1;
  padding: 5px 15px;
  background-color: black;
  color: white;
  border: black;
  cursor: pointer;
`

const Todo = ({ id, label, onDelete, isChecked, onToggle, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false) //수정모드인지??
  const [editText, setEditText] = useState(label) //수정할 텍스트가 뭔지??

  return (
    <TodoItem>
      <Top>
        {isEditing ? (
          <div style={{ flexDirection: 'column', alignItems: 'flex-start', width: '100%' }}>
            <span style={{ fontSize: '14px', marginBottom: '5px' }}>New name for {label}</span>
            <input
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              style={{ width: '100%', height: '35px', boxSizing: 'border-box' }}
            />
          </div>
        ) : (
          <>
            <CheckBox id={id} isChecked={isChecked} onChange={() => onToggle(id)} />
            <Label htmlFor={id}>{label}</Label>
          </>
        )}
      </Top>

      <Bottom>
        {isEditing ? (
          <>
            <EditButton onClick={() => setIsEditing(false)}>Cancel</EditButton>
            <SaveButton
              onClick={() => {
                onEdit(id, editText)
                setIsEditing(false)
              }}
            >
              Save
            </SaveButton>
          </>
        ) : (
          <>
            <EditButton onClick={() => setIsEditing(true)}>Edit</EditButton>
            <DeleteButton onClick={() => onDelete(id)}>Delete</DeleteButton>
          </>
        )}
      </Bottom>
    </TodoItem>
  )
}
export default Todo
