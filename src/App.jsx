import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    { name: "Eat", completed: true },
    { name: "Sleep", completed: false },
    { name: "Repeat", completed: false },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [filter, setFilter] = useState("all");

  const addTask = () => {
    if (inputValue) {
      setTasks([...tasks, { name: inputValue, completed: false }]);
      setInputValue("");
    }
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const editTask = (index, newName) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].name = newName;
    setTasks(updatedTasks);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <div>
      <h1>TodoMatic</h1>
      <div>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="What needs to be done?"
        />
        <button onClick={addTask}>Add</button>
      </div>
      <div>
        <button onClick={() => setFilter("all")}>Show all tasks</button>
        <button onClick={() => setFilter("active")}>Show active tasks</button>
        <button onClick={() => setFilter("completed")}>Show completed tasks</button>
      </div>
      <div>{tasks.filter((task) => !task.completed).length} tasks remaining</div>
      <ul>
        {filteredTasks.map((task, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(index)}
            />
            <span>{task.name}</span>
            <button onClick={() => editTask(index, prompt("Edit task:", task.name))}>
              Edit {task.name}
            </button>
            <button onClick={() => deleteTask(index)}>Delete {task.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;