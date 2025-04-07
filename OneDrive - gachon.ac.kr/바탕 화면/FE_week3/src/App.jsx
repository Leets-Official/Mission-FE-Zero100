import { useState } from 'react';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import Category from './components/Category';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Eat', completed: false },
    { id: 2, text: 'Sleep', completed: false },
    { id: 3, text: 'Repeat', completed: false },
  ]);
  const [filter, setFilter] = useState('All');

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'Active') return !todo.completed;
    if (filter === 'Completed') return todo.completed;
    return true;
  });

  return (
    <div className="App">
      <Header />
      <AddTodo onAdd={addTodo} />
      <Category current={filter} onChange={setFilter} />
      <TodoList
        todos={filteredTodos}
        onDelete={deleteTodo}
        onToggle={toggleComplete}
      />
    </div>
  );
}

export default App;