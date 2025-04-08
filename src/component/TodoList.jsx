function TodoList({ filteredTasks, toggleTask, editTask, deleteTask, activeTaskCount }) {
  return (
    <div className="todo-list">
      <div className="tasks-remaining">
        <TextComponent text={`${activeTaskCount} tasks remaining`} />
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
