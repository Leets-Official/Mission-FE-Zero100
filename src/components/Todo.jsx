import styled from 'styled-components';
import Checkbox from './Checkbox';
import Text from './Text';
import Button from './Button';

const ItemWrapper = styled.div`
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
  margin-top: 0.5rem;
 

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    padding-left: 0;
  }
`;

const EditButton = styled(Button)`
  width: 350px;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const DeleteButton = styled(Button)`
  width: 350px;
  background-color: #c0392b;
  color: #fff;
  border: none;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

function Todo({ task, onToggle, onDelete, onEdit }) {
  return (
    <ItemWrapper>
      <Row>
        <Checkbox checked={task.completed} onChange={() => onToggle(task.id)} />
        <Text>{task.name}</Text>
      </Row>
      <ButtonWrapper>
        <EditButton label="Edit" onClick={() => onEdit(task.id)} />
        <DeleteButton label="Delete" onClick={() => onDelete(task.id)} />
      </ButtonWrapper>
    </ItemWrapper>
  );
}

export default Todo;
