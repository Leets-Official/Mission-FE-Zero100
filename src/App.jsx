import React, { useState } from "react";
import TextComponent from "@/component/TextComponent";
import ButtonComponent from "@/component/ButtonComponent";
import CheckboxComponent from "@/component/CheckboxComponent";
import InputComponent from "@/component/InputComponent";

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
      <h1>
        <TextComponent text="TodoMatic" />
      </h1>
      <h2>
        <TextComponent text="What needs to be done?" />
      </h2>
      <div>
        <InputComponent
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <ButtonComponent label="Add Task" onClick={addTask} />
      </div>
      <div>
        <ButtonComponent label="Show all tasks" onClick={() => setFilter("all")} />
        <ButtonComponent label="Show active tasks" onClick={() => setFilter("active")} />
        <ButtonComponent label="Show completed tasks" onClick={() => setFilter("completed")} />
      </div>
      <div>
        <TextComponent text="3 tasks remaining" />
      </div>
      <ul>
        {filteredTasks.map((task, index) => (
          <li key={index}>
            <CheckboxComponent
              isChecked={task.completed}
              onChange={() => toggleTask(index)}
            />
            <TextComponent text={task.name} />
            <ButtonComponent
              label={`Edit ${task.name}`}
              onClick={() => editTask(index, prompt("Edit task:", task.name))}
            />
            <ButtonComponent
              label={`Delete ${task.name}`}
              onClick={() => deleteTask(index)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;