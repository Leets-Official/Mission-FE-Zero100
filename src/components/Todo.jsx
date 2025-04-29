import { useState, useContext, useEffect } from 'react'
import styled from 'styled-components'
import Checkbox from './common/Checkbox'
import Button from './common/Button'
import { TodoContext } from '../context/TodoContext'

// 개별 할 일을 감싸는 외곽 박스
const TodoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0 0.5rem 0.5rem;
  border-radius: 6px;
`

//체크박스 + 텍스트
const TopRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

//버튼 2개(Edit, Delete) 들어가는 줄
const BottomRow = styled.div`
  display: flex;
  gap: 0.5rem;
  width: 90%; // 버튼이 반반씩 차지하도록 기준 잡기
`

//EditInput - 수정 중일 때 나오는 인풋창
const EditInput = styled.input`
  flex: 1;
  margin-left: 0.5rem;
  padding: 4px;

  /* 읽기 전용일 때 input처럼 안 보이게 */
  border: ${({ readOnly }) => (readOnly ? 'none' : '1px solid #ccc')};
  background-color: ${({ readOnly }) => (readOnly ? 'transparent' : 'white')};
  font-size: 1rem;
`

// 버튼을 정확히 반씩
const HalfButton = styled(Button)`
  width: 220px;
`

const Todo = ({ todo }) => {
  const { onToggle, onDelete, onEdit, onSave } = useContext(TodoContext)
  const { id, text, completed, isEditing } = todo

  const [editText, setEditText] = useState(text)

  useEffect(() => {
    setEditText(text)
  }, [text])

  const handleSave = () => {
    onSave(id, editText)
  }

  const handleCancel = () => {
    onCancel(id)
  }

  return (
    <TodoWrapper>
      <TopRow>
        <Checkbox checked={completed} onChange={() => onToggle(id)} />
        <EditInput
          value={editText}
          readOnly={!isEditing}
          onChange={(e) => setEditText(e.target.value)}
          onBlur={handleSave}
          autoFocus={isEditing}
        />
      </TopRow>

      <BottomRow>
        <HalfButton
          variant={isEditing ? 'edit' : 'edit'}
          onClick={() => (isEditing ? handleSave() : onEdit(id))}
        >
          {isEditing ? 'Cancel' : 'Edit'}
        </HalfButton>
        <HalfButton
          variant={isEditing ? 'Save' : 'danger'}
          onClick={() => (isEditing ? handleSave() : onDelete(id))}
        >
          {isEditing ? 'Save' : 'Delete'}
        </HalfButton>
      </BottomRow>
    </TodoWrapper>
  )
}

export default Todo
