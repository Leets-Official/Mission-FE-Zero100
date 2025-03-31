import React from 'react';
import styled from "styled-components";

const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const StyledText = styled.h2`
  align-self: flex-start;
  margin-left: 505px;
`;

const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
  width: 40px;
  height: 40px;
  
  margin-right: 380px;
`;

const StyledButton = styled.button`
  padding: 7px 90px;
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

const Checkbox = () => {
  return (
    <CheckboxContainer>
      <StyledText>3 tasks remaining</StyledText>
      <ul className="task-list">
        <li className="task-item">
          <StyledCheckbox checked />
          <span>Eat</span>
          <div className="task-actions">
            <EditButton>Edit</EditButton>
            <DeleteButton>Delete</DeleteButton>
          </div>
        </li>
        <li className="task-item">
          <StyledCheckbox />
          <span>Sleep</span>
          <div className="task-actions">
            <EditButton>Edit</EditButton>
            <DeleteButton>Delete</DeleteButton>
          </div>
        </li>
        <li className="task-item">
          <StyledCheckbox />
          <span>Repeat</span>
          <div className="task-actions">
            <EditButton>Edit</EditButton>
            <DeleteButton>Delete</DeleteButton>
          </div>
        </li>
      </ul>
    </CheckboxContainer>
  );
};

export default Checkbox;
