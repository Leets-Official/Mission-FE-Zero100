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

   // 입력값을 내부 상태로 관리
  const [editText, setEditText] = useState(text);

  const handleSave = () => {
    onSave(id, editText);
  };

  return (
    /* TodoWarapper 한 덩어리는 할 일(Todo) 하나를 화면에 보여주는 UI임. 
      사용자가 할 일을 완료/수정/삭제할 수 있게 해줌 */
    <TodoWrapper>
      <TopRow>
        <Checkbox checked={completed} onChange={() => onToggle(id)} />
        {/* 컴포넌트를 하나로 유지하고, readonly 속성만 바꿔주기*/}
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
