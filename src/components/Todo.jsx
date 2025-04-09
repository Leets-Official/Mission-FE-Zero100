import styled from "styled-components";
import { useTodo } from "../contexts/TodoContext";
import Button from "./Button"; 


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
    content: \"✔️\";
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
        <span>{task.name}</span>
      </Row>
      <ButtonWrapper>
        <EditButton onClick={() => editTask(task.id)}>Edit</EditButton>
        <DeleteButton onClick={() => deleteTask(task.id)}>Delete</DeleteButton>
      </ButtonWrapper>
    </ItemWrapper>
  );
}

export default Todo;