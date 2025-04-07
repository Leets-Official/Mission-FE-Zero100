import React from 'react';
import styled from "styled-components";

const TodoListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const StyledText = styled.h2`
  align-self: flex-start;
  margin-left: 200px;
`;

const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
  appearance: none;
  width: 40px;
  height: 40px;
  margin-right: 10px;
  border: 2px solid black;
  background-color: white;
  position: relative;
  margin-right: 10px;

  &:checked::after {
    content: '';
    position: absolute;
    top: 5px;
    left: 12px;
    width: 8px;
    height: 16px;
    border: solid black;
    border-width: 0 4px 4px 0;
    transform: rotate(45deg);
  };
`;

const StyledButton = styled.button`
  padding: 7px 80px;
  font-size: 14px;
  border: none;
  border-radius: 0px;
  margin: 5px;
`;

const EditButton = styled(StyledButton)`
  background-color: white;
  border: 1px solid black;
`;

const DeleteButton = styled(StyledButton)`
  background-color: #d9534f;
  color: white;
`;

const TaskItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
`;

const TaskTop = styled.div`
  display: flex;
  align-items: center;
`;

const TaskActions = styled.div`
  display: flex;
  margin-top: 5px;
`;

const TodoList = () => {
    return (
      <TodoListContainer>
        <StyledText>3 tasks remaining</StyledText>
        <div className="task-list">
          <TaskItem>
            <TaskTop>
              <StyledCheckbox />
              <span>Eat</span>
            </TaskTop>
            <TaskActions>
              <EditButton>Edit</EditButton>
              <DeleteButton>Delete</DeleteButton>
            </TaskActions>
          </TaskItem>
          <TaskItem>
            <TaskTop>
              <StyledCheckbox />
              <span>Sleep</span>
            </TaskTop>
            <TaskActions>
              <EditButton>Edit</EditButton>
              <DeleteButton>Delete</DeleteButton>
            </TaskActions>
          </TaskItem>
          <TaskItem>
            <TaskTop>
              <StyledCheckbox />
              <span>Repeat</span>
            </TaskTop>
            <TaskActions>
              <EditButton>Edit</EditButton>
              <DeleteButton>Delete</DeleteButton>
            </TaskActions>
          </TaskItem>
        </div>
      </TodoListContainer>
    );
  };
  
  export default TodoList;
  