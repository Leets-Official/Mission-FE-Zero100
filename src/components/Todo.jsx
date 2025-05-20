import { useState, useContext, useEffect } from 'react'
import styled from 'styled-components'
import Checkbox from './common/Checkbox'
import Button from './common/Button'
import { TodoContext } from '../context/TodoContext'

const TitleText = styled.span`
  margin-left: 0.5rem;
  font-size: 1.25rem;
  font-weight: 500;
`

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
  width: 457px;
  margin-left: 0.3rem;
  padding: 8px 12px;
  font-size: 1rem;
  border: 2px solid #000;
  box-sizing: border-box;
  border-radius: 0px;
`

// 버튼을 정확히 반씩
const HalfButton = styled(Button)`
  width: 220px;
`

const Todo = ({ todo }) => {
  const { onToggle, onDelete, onEdit, onSave, onCancel } = useContext(TodoContext)
  const { id, text, completed, isEditing } = todo

  const [editText, setEditText] = useState(isEditing ? text : '')

  const handleSave = () => {
    onSave(id, editText)
  }

  const handleCancel = () => {
    onCancel(id)
  }

  useEffect(() => {
    if (isEditing) {
      setEditText('')
    }
  }, [isEditing])

  return (
    <TodoWrapper>
      <TopRow>
        {isEditing ? (
          // 체크박스 대신 고정 텍스트
          <span
            style={{
              marginLeft: '0.5rem',
              fontSize: '1.25rem',
              fontWeight: '500',
            }}
          >
            New name for {text.replace(/^New name for /, '')}
          </span>
        ) : (
          // 평소엔 체크박스 + 기존 텍스트
          <>
            <Checkbox checked={completed} onChange={() => onToggle(id)} />
            <span style={{ marginLeft: '0.5rem' }}>{text}</span>
          </>
        )}
      </TopRow>

      {/* Edit 상태에서만 입력창 보여줌 */}
      {isEditing && (
        <div style={{ width: '100%', marginTop: '0.25rem' }}>
          <EditInput
            value={editText}
            placeholder=''
            onChange={(e) => setEditText(e.target.value)}
            autoFocus
          />
        </div>
      )}

      <BottomRow>
        <HalfButton variant='edit' onClick={() => (isEditing ? handleCancel() : onEdit(id))}>
          {isEditing ? 'Cancel' : 'Edit'}
        </HalfButton>
        <HalfButton
          variant={isEditing ? 'save' : 'danger'}
          onClick={() => (isEditing ? handleSave() : onDelete(id))}
        >
          {isEditing ? 'Save' : 'Delete'}
        </HalfButton>
      </BottomRow>
    </TodoWrapper>
  )
}

export default Todo
