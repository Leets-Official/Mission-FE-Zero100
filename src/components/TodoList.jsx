import TodoItem from './TodoItem';
import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  padding-left: 0;
`;

function TodoList({
  tasks,
  onToggle,
  onDelete,
  onEdit,
  onSaveEdit,
  editId,
  editText,
  setEditText,
}) {
  return (
    <List>
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
          onSaveEdit={onSaveEdit}
          isEditing={editId === task.id}
          editText={editText}
          setEditText={setEditText}
        />
      ))}
    </List>
  );
}

export default TodoList;
