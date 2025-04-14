import TodoItem from './TodoItem';

export default function TodoList({ todos, onDelete, onToggle }) {
  return (
    <div className="todo-list">
      <p>{todos.length} tasks remaining</p>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </div>
  );
}