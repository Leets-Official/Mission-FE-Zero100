import { useState } from "react";

export default function TodoItem({ text }) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <span
        style={{
          textDecoration: isChecked ? "line-through" : "none",
          color: isChecked ? "#aaa" : "#000"
        }}
      >
        {text}
      </span>
      <button>Edit</button>
      <button className="delete">Delete</button>
    </div>
  );
}
