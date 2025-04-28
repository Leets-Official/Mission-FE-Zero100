import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Title, AddTodo, Category, TodoList } from './component/index'

function App() {
  const [tasks, setTasks] = useState([
    { id: 'eat', label: 'Eat', isChecked: false },
    { id: 'sleep', label: 'Sleep', isChecked: false },
    { id: 'repeat', label: 'Repeat', isChecked: false },
  ])

  const [filter, setFilter] = useState('all')
  const [isEditing, setIsEditing] = useState(false)
  const [editTaskId, setEditTaskId] = useState(null)
  const [newName, setNewName] = useState('')

  const handleAdd = (text) => {
    if (!text.trim()) return
    setTasks([...tasks, { id: uuidv4(), label: text, isChecked: false }])
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

  const handleEdit = (id) => {
    const taskToEdit = tasks.find((task) => task.id === id)
    setEditTaskId(id)
    setNewName(taskToEdit.label)
    setIsEditing(true)
  }

  const handleSave = () => {
    if (newName.trim()) {
      setTasks(
        tasks.map((task) =>
          task.id === editTaskId ? { ...task, label: newName } : task
        )
      )
      setIsEditing(false)
      setNewName('')
      setEditTaskId(null)
    }
  }

  const handleCancel = () => {
    setIsEditing(false)
    setNewName('')
    setEditTaskId(null)
  }

  return (
    <div>
      <Title />
      <AddTodo onAdd={handleAdd} />
      <Category onClick={setFilter} />

      <TodoList
        tasks={filteredTasks}
        onToggle={handleToggle}
        onDelete={handleDelete}
        onEdit={handleEdit}
        isEditing={isEditing}
        newName={newName}
        setNewName={setNewName}
        onSave={handleSave}
        onCancel={handleCancel}
        editTaskId={editTaskId}
      />
    </div>
  )
}

export default App
