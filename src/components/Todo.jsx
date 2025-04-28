import styled from "styled-components";
import { useTodo } from "../contexts/TodoContext";
import Button from "./Button"; 

import { useState } from "react"; // 수정 모드 상태 관리

const ItemWrapper = styled.li`
  margin-bottom: 1.5rem;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

const EditButton = styled(Button)`
  width: 380px;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const DeleteButton = styled(Button)`
  width: 380px;
  background-color: #c0392b;
  color: #fff;
  border: none;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const CheckboxWrapper = styled.label`
  position: relative;
  width: 24px;
  height: 24px;
  border: 2px solid #000;
  border-radius: 4px;
  cursor: pointer;

  input {
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    margin: 0;
    cursor: pointer;
  }

  span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
    border-radius: 4px;
  }

  input:checked + span::after {
    content: "✔️";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 18px;
    color: black;
  }
`;

function Todo({ task }) {
  const { toggleTask, deleteTask, editTask } = useTodo();

  const [isEditing, setIsEditing] = useState(false); // 수정모드 여부
  const [newName, setNewName] = useState(task.name); //  수정할 새로운 이름

  function handleSave() {
    editTask(task.id, newName); // 수정된 이름 저장
    setIsEditing(false); // 다시 보기 모드로
  }

  function handleCancel() {
    setNewName(task.name); // 원래 이름으로 되돌리고
    setIsEditing(false); // 보기 모드로
  }

  return (
    <ItemWrapper>
      <Row>
        <CheckboxWrapper>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTask(task.id)}
          />
          <span></span>
        </CheckboxWrapper>

        {/* 이름 대신 입력창 조건부 렌더링 */}
        {isEditing ? (
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            style={{ flex: 1, height: "30px", fontSize: "16px" }}
          />
        ) : (
          <span>{task.name}</span>
        )}
      </Row>

      <ButtonWrapper>
        {/* 버튼도 Edit 모드에 따라 다르게 표시 */}
        {isEditing ? (
          <>
            <EditButton onClick={handleSave}>Save</EditButton>
            <DeleteButton onClick={handleCancel}>Cancel</DeleteButton>
          </>
        ) : (
          <>
            <EditButton onClick={() => setIsEditing(true)}>Edit</EditButton>
            <DeleteButton onClick={() => deleteTask(task.id)}>Delete</DeleteButton>
          </>
        )}
      </ButtonWrapper>
    </ItemWrapper>
  );
}

export default Todo;