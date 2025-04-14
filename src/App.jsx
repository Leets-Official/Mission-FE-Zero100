import Header from './component/Header'
import AddTodo from './component/AddTodo'
import Category from './component/Category'
import TodoList from './component/TodoList'
import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState('All') //보여줄 항목 필터링...

  const addTodo = (label) => {
    const newTodo = {
      id: Date.now().toString(),
      label,
      checked: false,
    }
    setTodos([...todos, newTodo])
  }

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'Active') return !todo.checked
    if (filter === 'Completed') return todo.checked
    return true
  })

  const remainingCount = filteredTodos.length

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  } //삭제할 id 외 다른 id들만 필터링하기

  const toggleTodo = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, checked: !todo.checked } : todo)))
  }
  return (
    <div style={{ padding: '10px' }}>
      <Header />
      <AddTodo onAdd={addTodo} />
      <Category filter={filter} setFilter={setFilter} />
      <TodoList
        todos={filteredTodos}
        onDelete={deleteTodo}
        onToggle={toggleTodo}
        remainingCount={remainingCount}
      />
    </div>
  )
}

export default App
