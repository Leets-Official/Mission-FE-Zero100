import styled from 'styled-components';
import Button from './Button';
import Input from './Input';
import Checkbox from './Checkbox';

const Item = styled.li`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const TaskText = styled.span`
  color: #000;
`;

function TodoItem({
  task,
  onToggle,
  onDelete,
  onEdit,
  onSaveEdit,
  isEditing,
  editText,
  setEditText,
}) {
  return (
    <Item>
      <Checkbox checked={task.completed} onChange={() => onToggle(task.id)} />
      {isEditing ? (
        <>
          <Input value={editText} onChange={(e) => setEditText(e.target.value)} />
          <Button label="Save" onClick={() => onSaveEdit(task.id)} />
        </>
      ) : (
        <>
          <TaskText>{task.name}</TaskText>
          <Button label="Edit" onClick={() => onEdit(task.id, task.name)} />
          <Button label="Delete" onClick={() => onDelete(task.id)} />
        </>
      )}
    </Item>
  );
}

export default TodoItem;
