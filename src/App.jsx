import { useState } from 'react';
import { Header, AddTodo, Category, TodoList } from './components';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 600px;
  margin: 3rem auto;
  padding: 2rem;
  background-color: #fafafa;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const RemainingTasks = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 2rem 0 1rem 0;
`;

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Eat', completed: true },
    { id: 2, name: 'Sleep', completed: false },
    { id: 3, name: 'Repeat', completed: false },
  ]);
  const [filter, setFilter] = useState('All');
  const [input, setInput] = useState('');
  const [isEditing, setIsEditing] = useState(null);

  const handleAdd = () => {
    if (!input.trim()) return;
    setTasks([...tasks, { id: Date.now(), name: input.trim(), completed: false }]);
    setInput('');
  };

  const handleToggle = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleEdit = (id) => {
    setIsEditing(id);
    const task = tasks.find(task => task.id === id);
    setInput(task.name);
  };

  const handleSave = () => {
    setTasks(tasks.map(task => task.id === isEditing ? { ...task, name: input } : task));
    setIsEditing(null);
    setInput('');
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'All') return true;
    if (filter === 'Active') return !task.completed;
    if (filter === 'Completed') return task.completed;
  });

  return (
    <Container>
      <Header />
      <AddTodo
        input={input}
        setInput={setInput}
        onAdd={isEditing ? handleSave : handleAdd}
        isEditing={isEditing !== null}
      />
      <Category filter={filter} setFilter={setFilter} />
      <RemainingTasks>
        {filteredTasks.filter(task => !task.completed).length} tasks remaining
      </RemainingTasks>
      <TodoList
        tasks={filteredTasks}
        onToggle={handleToggle}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </Container>
  );
}

export default App;
