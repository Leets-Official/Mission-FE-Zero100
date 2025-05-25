import { createContext, useContext, useState, useEffect } from "react";

const TodoContext = createContext();

export function TodoProvider({ children }) {
  // 초기 tasks를 localStorage에서 불러오기
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  const [filter, setFilter] = useState("All");

  // tasks가 바뀔 때마다 localStorage에 저장하기
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (name) => {
    setTasks((prev) => [...prev, { id: Date.now(), name, completed: false }]);
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const editTask = (id, newName) => {
    // Edit 기능 구현 (새로운 이름으로 수정)
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, name: newName } : task
      )
    );
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "All") return true;
    if (filter === "Active") return !task.completed;
    if (filter === "Completed") return task.completed;
    return true; // 혹시 몰라서 추가
  });

  return (
    <TodoContext.Provider
      value={{
        tasks,
        addTask,
        deleteTask,
        toggleTask,
        editTask,
        filter,
        setFilter,
        filteredTasks,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export function useTodo() {
  const context = useContext(TodoContext);
  if (!context) throw new Error("useTodo must be used within a TodoProvider");
  return context;
}