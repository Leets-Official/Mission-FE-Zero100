import styled from 'styled-components';
import Checkbox from './common/Checkbox';
import Button from './common/Button';
import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

const TodoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 6px;
`;

const TopRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const BottomRow = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const TodoText = styled.span`
  flex: 1;
  margin-left: 0.5rem;
  text-decoration: none; 
`;

const EditInput = styled.input`
  flex: 1;
  margin-left: 0.5rem;
  padding: 4px;
`;

const HalfButton = styled(Button)`
  flex: 1;
`;

const Todo = ({ todo }) => {
  const { onToggle, onDelete, onEdit, onSave } = useContext(TodoContext);
  const { id, text, completed, isEditing } = todo;

  return (
    <TodoWrapper>
      <TopRow>
        <Checkbox checked={completed} onChange={() => onToggle(id)} />
        {isEditing ? (
          <EditInput
            defaultValue={text}
            onBlur={(e) => onSave(id, e.target.value)}
            autoFocus
          />
        ) : (
          <TodoText>{text}</TodoText>
        )}
      </TopRow>

      <BottomRow>
        <HalfButton
          variant="category"
          onClick={() => (isEditing ? onSave(id, text) : onEdit(id))}
        >
          {isEditing ? 'Save' : 'Edit'}
        </HalfButton>

        <HalfButton variant="danger" onClick={() => onDelete(id)}>
          Delete
        </HalfButton>
      </BottomRow>
    </TodoWrapper>
  );
};

export default Todo;
