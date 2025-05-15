import styled from 'styled-components'
import Checkbox from '../Common/Checkbox'
import Input from '../Common/Input'

const TodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  width: 100%;
  margin: 0 auto;
  min-height: 50px; // 높이를 고정시켜서 크기가 변하지 않도록 설정
`

const TaskText = styled.span`
  font-size: 20px;
  margin-left: 10px;
  display: inline-block;
  width: 100%;
`

const EditButton = styled.button`
  background-color: #ffffff;
  color: black;
  padding: 10px 20px;
  flex: 1;
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

const SaveButton = styled.button`
  background-color: rgb(0, 0, 0);
  color: white;
  padding: 10px 20px;
  flex: 1;
  font-size: 16px;
  border: none;
  box-sizing: border-box;
`

const CancelButton = styled.button`
  background-color: #ffffff;
  color: black;
  padding: 10px 20px;
  flex: 1;
  font-size: 16px;
  border: 2px solid #999;
  box-sizing: border-box;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 5px;
  flex-grow: 1;
  margin-top: 5px;
`

const TaskContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`

const EditInputWrapper = styled.div`
  width: 100%;
  margin-top: 10px;
  input {
    font-size: 16px;
    padding: 5px;
    height: 50px;
    width: 100%;
  }
`

const NewNameLabel = styled.div`
  font-size: 18px;
  color: gray;
  margin-top: 10px;
`

// EditSection은 기존 요소들 위에 덮어쓰지 않고 추가된 영역
const EditSection = styled.div`
  width: 100%;
  margin-top: 10px;
  padding-left: 0; // margin-left를 제거
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`

const Todo = ({
  task,
  id,
  isChecked,
  onToggle,
  onDelete,
  onEdit,
  isEditing,
  newName,
  setNewName,
  onSave,
  onCancel,
}) => {
  return (
    <TodoContainer>
      <TaskContainer>
        {isEditing ? (
          // TaskContainer의 크기를 유지하면서 EditSection만 추가
          <>
            <EditSection>
              <NewNameLabel>New name for {task}:</NewNameLabel>
              <EditInputWrapper>
                <Input
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)} // 이름 변경 시 상태 업데이트
                />
              </EditInputWrapper>
            </EditSection>
          </>
        ) : (
          <>
            <Checkbox
              id={id}
              isChecked={isChecked}
              onChange={() => onToggle(id)}
            />
            <TaskText>{task}</TaskText>
          </>
        )}
      </TaskContainer>
      <ButtonContainer>
        {isEditing ? (
          <>
            <CancelButton onClick={onCancel}>Cancel</CancelButton>
            <SaveButton onClick={onSave}>Save</SaveButton>
          </>
        ) : (
          <>
            <EditButton onClick={() => onEdit(id)}>Edit</EditButton>
            <DeleteButton onClick={() => onDelete(id)}>Delete</DeleteButton>
          </>
        )}
      </ButtonContainer>
    </TodoContainer>
  )
}

export default Todo
