import React, { useState } from "react";
import Header from "@/component/Header";
import AddTodo from "@/component/AddTodo";
import Category from "@/component/Category"; // Category 컴포넌트 추가
import TodoList from "@/component/TodoList";
import "./App.css";

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
    <div className="app-container">
      <Header />
      <AddTodo
        inputValue={inputValue}
        setInputValue={setInputValue}
        addTask={addTask}
      />
      <Category setFilter={setFilter} /> {/* Category 컴포넌트 추가 */}
      <TodoList
        filteredTasks={filteredTasks}
        toggleTask={toggleTask}
        editTask={editTask}
        deleteTask={deleteTask}
      />
    </div>  
  );
}

export default App;