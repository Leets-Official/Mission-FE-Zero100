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

const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 0.5rem;
`;

const EditButton = styled(Button)`
  width: 200px;
`;

const DeleteButton = styled(Button)`
  width: 200px;
  background-color: #c0392b;
  color: #fff;
  border: none;
`;

function TodoItem({ task, onToggle, onDelete, onEdit }) {
  return (
    <ItemWrapper>
      <Row>
        <Checkbox checked={task.completed} onChange={() => onToggle(task.id)} />
        <Text>{task.name}</Text>
      </Row>
      <ButtonRow>
        <EditButton label="Edit" onClick={() => onEdit(task.id)} />
        <DeleteButton label="Delete" onClick={() => onDelete(task.id)} />
      </ButtonRow>
    </ItemWrapper>
  );
}

export default TodoItem;
