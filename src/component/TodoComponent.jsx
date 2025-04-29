// src/components/Todo.jsx
import CheckboxComponent from "./CheckboxComponent";
import ButtonComponent from "./ButtonComponent";

function Todo({ task, index, toggleTask, editTask, deleteTask }) {
  return (
    <div className="task-item">
      <div className="task-row">
        <CheckboxComponent
          isChecked={task.completed}
          onChange={() => toggleTask(index)}
        />
        <span className="task-name">{task.name}</span>
      </div>
      <div className="task-actions">
        <ButtonComponent
          type="edit"
          label="Edit"
          onClick={() => editTask(index, prompt("Edit task:", task.name))}
        />
        <ButtonComponent
          type="delete"
          label="Delete"
          onClick={() => deleteTask(index)}
        />
      </div>
    </div>
  );
}

export default Todo;
