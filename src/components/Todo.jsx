import { useState, useContext } from 'react';
import styled from 'styled-components';
import Checkbox from './common/Checkbox';
import Button from './common/Button';
import { TodoContext } from '../context/TodoContext';

const TodoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-radius: 6px;
`;

const TopRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const BottomRow = styled.div`
  display: flex;
  gap: 0.5rem;
  width: 100%; // 버튼이 반반씩 차지하도록 기준 잡기
`;

const EditInput = styled.input`
  flex: 1;
  margin-left: 0.5rem;
  padding: 4px;

  /* 읽기 전용일 때 input처럼 안 보이게 */
  border: ${({ readOnly }) => (readOnly ? 'none' : '1px solid #ccc')};
  background-color: ${({ readOnly }) => (readOnly ? 'transparent' : 'white')};
  font-size: 1rem;
`;

const HalfButton = styled(Button)`
  width: 50%; // 버튼을 정확히 반씩
`;

const Todo = ({ todo }) => {
  const { onToggle, onDelete, onEdit, onSave } = useContext(TodoContext);
  const { id, text, completed, isEditing } = todo;

  const [editText, setEditText] = useState(text);

  const handleSave = () => {
    onSave(id, editText);
  };

  return (
    <TodoWrapper>
      <TopRow>
        <Checkbox checked={completed} onChange={() => onToggle(id)} />
        <EditInput
          value={editText}
          readOnly={!isEditing}
          onChange={(e) => setEditText(e.target.value)}
          onBlur={handleSave}
          autoFocus={isEditing}
        />
      </TopRow>

      <BottomRow>
        <HalfButton
          variant="category"
          onClick={() => (isEditing ? handleSave() : onEdit(id))}
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
