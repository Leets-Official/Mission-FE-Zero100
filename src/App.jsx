import { useState } from 'react'
import styled from 'styled-components'

import Text from './component/Common/Text.jsx'
import Button from './component/Common/Button.jsx'
import Checkbox from './component/Common/Checkbox.jsx'
import Input from './component/Common/Input.jsx'
import Title from './component/Layout/Title.jsx'
import Category from './component/Category.jsx'
import AddTodo from './component/Todo/AddTodo.jsx'
import TodoList from './component/Todo/TodoList.jsx'

function App() {
  const [tasks, setTasks] = useState([
    { id: 'eat', label: 'Eat', checked: true },
    { id: 'sleep', label: 'Sleep', checked: false },
    { id: 'repeat', label: 'Repeat', checked: false },
  ])

  const handleAdd = (text) => {
    if (!text.trim()) return
    setTasks([...setTasks, { id: Date.now(), text, checked: false }])
  }

  const handleToggle = (id) => {
    setTasks(
      setTasks.map((task) =>
        task.id === id ? { ...task, checked: !task.checked } : task
      )
    )
  }

  return (
    <div>
      <Title />
      <AddTodo onAdd={handleAdd} />
      <Category />
      <TodoList tasks={tasks} onToggle={handleToggle} />
    </div>
  )
}

export default App
