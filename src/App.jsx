import { useState } from 'react'
import styled from 'styled-components'

import Text from './component/Common/Text.jsx'
import Button from './component/Common/Button.jsx'
import Checkbox from './component/Common/Checkbox.jsx'
import Input from './component/Common/Input.jsx'
import Title from './component/Layout/Title.jsx'
import Category from './component/Category.jsx'
import Todo from './component/Todo/Todo.jsx'
import AddTodo from './component/Todo/AddTodo.jsx'
import TodoList from './component/Todo/TodoList.jsx'

function App() {
  const [tasks, setTasks] = useState([
    { id: 'eat', label: 'Eat', isChecked: false },
    { id: 'sleep', label: 'Sleep', isChecked: false },
    { id: 'repeat', label: 'Repeat', isChecked: false },
  ])

  const [filter, setFilter] = useState('all')

  const handleAdd = (text) => {
    if (!text.trim()) return
    setTasks([...tasks, { id: Date.now(), label: text, isChecked: false }])
  }

  const handleToggle = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isChecked: !task.isChecked } : task
      )
    )
  }
  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'all') return true
    if (filter === 'active') return !task.isChecked
    if (filter === 'completed') return task.isChecked
  })

  return (
    <div>
      <Title />
      <AddTodo onAdd={handleAdd} />
      <Category onClick={setFilter} />
      <TodoList
        tasks={filteredTasks}
        onToggle={handleToggle}
        onDelete={handleDelete}
      />
    </div>
  )
}

export default App
