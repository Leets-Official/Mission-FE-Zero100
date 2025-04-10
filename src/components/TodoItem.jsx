export default function TodoItem({ todo, onDelete, onToggle }) {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <span
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none',
          color: todo.completed ? '#aaa' : '#000'
        }}
      >
        {todo.text}
      </span>
      <button>Edit</button>
      <button className="delete" onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
}
