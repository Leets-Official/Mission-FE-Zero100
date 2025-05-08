import { useState } from 'react';

export default function TodoItem({ todo, onDelete, onToggle, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing) {
      if (editText.trim() !== '') {
        onEdit(todo.id, editText);
      }
    }
    setIsEditing(!isEditing);
  };

  const handleCancel = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      {isEditing ? (
        <>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="edit-input"
          />
          <button onClick={handleCancel}>Cancel</button>
          <button onClick={handleEdit}>Save</button>
        </>
      ) : (
        <>
          <span
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
              color: todo.completed ? '#aaa' : '#000'
            }}
          >
            {todo.text}
          </span>
          <button onClick={handleEdit}>Edit</button>
          <button className="delete" onClick={() => onDelete(todo.id)}>Delete</button>
        </>
      )}
    </div>
  );
}
