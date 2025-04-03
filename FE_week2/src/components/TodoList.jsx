import TodoItem from "./TodoItem";

export default function TodoList() {
  const todos = ["Eat", "Sleep", "Repeat"];

  return (
    <div className="todo-list">
      <p>{todos.length} tasks remaining</p>
      {todos.map((todo, index) => (
        <TodoItem key={index} text={todo} />
      ))}
    </div>
  );
}
