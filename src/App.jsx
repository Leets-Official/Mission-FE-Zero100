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

  return (
    <div style={{ padding: '10px' }}>
      <Header />
      <AddTodo onAdd={addTodo} />
      <Category />
      <TodoList />
    </div>
  )
}

export default App
