import React, { useState } from 'react';

interface TodoProps {
  name: string;
  completed: boolean;
  id: string;
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
  onEdit: (id: string, newName: string) => void;
}

export default function Todo({ name, completed, id, onDelete, onToggle, onEdit }: TodoProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(name);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onEdit(id, newName);
    setIsEditing(false);
  }

  const editingTemplate = (
    <form className="todo-edit-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor={id} style={{ fontSize: '1rem' }}>
          New name for {name}
        </label>
        <input
          id={id}
          className="todo-text"
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
      </div>
      <div className="btn-group" style={{ justifyContent: 'flex-start', margin: '0' }}>
        <button
          type="button"
          className="btn"
          onClick={() => setIsEditing(false)}
          style={{ backgroundColor: 'white', color: 'black' }}
        >
          Cancel
        </button>
        <button type="submit" className="btn btn__primary">
          Save
        </button>
      </div>
    </form>
  );

  const viewTemplate = (
    <div className="todo">
      <div className="todo-item">
        <input
          id={id}
          type="checkbox"
          defaultChecked={completed}
          onChange={() => onToggle(id)}
        />
        <label className="todo-label" htmlFor={id}>
          {name}
        </label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn" onClick={() => setIsEditing(true)}>
          Edit
        </button>
        <button
          type="button"
          className="btn btn__danger"
          onClick={() => onDelete(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );

  return <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>;
} 