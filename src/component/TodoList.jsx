// src/components/TodoList.jsx
import TextComponent from "./TextComponent";
import Todo from "./Todo";

function TodoList({ filteredTasks, toggleTask, editTask, deleteTask }) {
  return (
    <div className="todo-list">
      <div className="tasks-remaining">
        <TextComponent text={`${filteredTasks.length} tasks remaining`} />
      </div>
      <div className="task-list">
        {filteredTasks.map((task, index) => (
          <Todo
            key={index}
            task={task}
            index={index}
            toggleTask={toggleTask}
            editTask={editTask}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoList;

