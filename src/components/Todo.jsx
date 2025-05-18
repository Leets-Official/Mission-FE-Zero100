// src/components/Todo.jsx

import React, { useState } from "react";
import styled from "styled-components";
import { useTodo } from "../contexts/TodoContext";
import Input from "./Input"; // 기존에 만든 Input 컴포넌트를 불러옵니다.

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

const EditButton = styled.button`
  width: 380px;
  padding: 8px;
  background-color:rgb(255, 255, 255);
  color: black;
  border: 2px solid black;
  font-size: 16px;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const DeleteButton = styled.button`
  width: 380px;
  padding: 8px;
  background-color: #c0392b;
  color: white;
  border: none;
  font-size: 16px;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const SaveButton = styled.button`
  flex: 1;
  padding: 8px;
  background-color: black;
  color: white;
  border: none;
  font-size: 16px;
`;

const CancelButton = styled.button`
  flex: 1;
  padding: 8px;
  background-color: white;
  color: black;
  border: 2px solid black;
  font-size: 16px;
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

  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(task.name);

  const handleSave = () => {
    editTask(task.id, newName);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setNewName(task.name);
    setIsEditing(false);
  };

  return (
    <ItemWrapper>
      {isEditing ? (
        <>
          <p>New name for {task.name}</p>
          <Input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            style={{ height: "30px", fontSize: "16px", width: "100%" }}
          />
          <ButtonWrapper>
            <CancelButton onClick={handleCancel}>Cancel</CancelButton>
            <SaveButton onClick={handleSave}>Save</SaveButton>
          </ButtonWrapper>
        </>
      ) : (
        <>
          <Row>
            <CheckboxWrapper>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
              />
              <span></span>
            </CheckboxWrapper>
            <span>{task.name}</span>
          </Row>

          <ButtonWrapper>
            <EditButton onClick={() => setIsEditing(true)}>Edit</EditButton>
            <DeleteButton onClick={() => deleteTask(task.id)}>Delete</DeleteButton>
          </ButtonWrapper>
        </>
      )}
    </ItemWrapper>
  );
}

export default Todo;
