import TodoItem from './Todo';

function TodoList({ tasks, onToggle, onDelete, onEdit }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {tasks.map(task => (
        <TodoItem
          key={task.id}
          task={task}
          onToggle={() => onToggle(task.id)}
          onDelete={() => onDelete(task.id)}
          onEdit={() => onEdit(task.id)}
        />
      ))}
    </ul>
  );
}

export default TodoList;
