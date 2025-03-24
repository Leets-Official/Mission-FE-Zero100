import { useState } from "react";
import Text from "./components/Text";
import Input from "./components/Input";
import Button from "./components/Button";
import Checkbox from "./components/Checkbox";

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  function addTask() {
    if (task.trim() !== "") {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask(""); // 입력 필드 초기화
    }
  }

  function toggleTask(index) {
    const newTasks = tasks.map((t, i) =>
      i === index ? { ...t, completed: !t.completed } : t
    );
    setTasks(newTasks);
  }

  return (
    <div >
      <h2>To-Do List</h2>
      <Input value={task} onChange={(e) => setTask(e.target.value)} placeholder="할 일 입력..." />
      <Button onClick={addTask}>add</Button>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((t, index) => (
          <li key={index} style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "8px" }}>
            <Checkbox checked={t.completed} onChange={() => toggleTask(index)} />
            <span style={{ textDecoration:"none" }}>{t.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;