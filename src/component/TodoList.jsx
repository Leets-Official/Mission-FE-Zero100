import React from "react";
import TextComponent from "./TextComponent";
import CheckboxComponent from "./CheckboxComponent";
import ButtonComponent from "./ButtonComponent";

function TodoList({ filteredTasks, toggleTask, editTask, deleteTask }) {
  return (
    <div className="todo-list">
      <div className="tasks-remaining">
        <TextComponent text="3 tasks remaining" />
      </div>
      <div className="task-list">
        {filteredTasks.map((task, index) => (
          <div key={index} className="task-item">
            <div className="task-row">
              <CheckboxComponent
                isChecked={task.completed}
                onChange={() => toggleTask(index)}
              />
              <span className="task-name">{task.name}</span>
            </div>
            <div className="task-actions">
              <ButtonComponent
                label="Edit"
                onClick={() => editTask(index, prompt("Edit task:", task.name))}
              />
              <ButtonComponent label="Delete" onClick={() => deleteTask(index)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoList;