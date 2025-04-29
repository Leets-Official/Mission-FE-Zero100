// src/App.jsx - 이전 답변에서 제공된 최종 코드 사용
import React, { useState, useEffect } from "react";
import Header from "./component/Header";
import AddTodo from "./component/AddTodo";
import Category from "./component/Category";
import TodoList from "./component/TodoList";
import "./App.css";

const LOCAL_STORAGE_KEY = "react-todo-app.tasks";

function App() {
  const [tasks, setTasks] = useState(() => {
    try {
      const storedTasks = localStorage.getItem(LOCAL_STORAGE_KEY);
      return storedTasks ? JSON.parse(storedTasks) : [];
    } catch (error) {
      console.error("Failed to load tasks from localStorage:", error);
      return [];
    }
  });

  const [inputValue, setInputValue] = useState("");
  const [filter, setFilter] = useState("all");

  const [displayTaskCount, setDisplayTaskCount] = useState(tasks.length);

  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
    } catch (error) {
      console.error("Failed to save tasks to localStorage:", error);
    }
  }, [tasks]);

  const addTask = () => {
    if (inputValue.trim()) {
      const newTask = {
        id: Date.now() + Math.random(),
        name: inputValue.trim(),
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setDisplayTaskCount(prevCount => prevCount + 1);
      setInputValue("");
    }
  };

  const toggleTask = (id) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
    setDisplayTaskCount(prevCount => prevCount - 1);
  };

   const editTask = (id, newName) => {
    if (newName && newName.trim()) {
       const updatedTasks = tasks.map(task =>
        task.id === id ? { ...task, name: newName.trim() } : task
      );
      setTasks(updatedTasks);
    }
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
      <Category setFilter={setFilter} />
      <TodoList
        filteredTasks={filteredTasks}
        toggleTask={toggleTask}
        editTask={editTask}
        deleteTask={deleteTask}
        activeCount={displayTaskCount}
      />
    </div>
  );
}

export default App;