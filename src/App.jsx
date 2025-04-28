import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Title, AddTodo, Category, TodoList } from './component/index'

function App() {
  // 로컬 스토리지에서 tasks 불러오기
  const loadTasks = () => {
    const savedTasks = localStorage.getItem('tasks')
    return savedTasks ? JSON.parse(savedTasks) : [] // 없으면 빈 배열로 초기화
  }

  const [tasks, setTasks] = useState(loadTasks()) // tasks 초기값으로 로컬 스토리지 값 사용

  const [filter, setFilter] = useState('all')
  const [isEditing, setIsEditing] = useState(false)
  const [editTaskId, setEditTaskId] = useState(null)
  const [newName, setNewName] = useState('')

  // tasks가 변경될 때마다 로컬 스토리지에 저장
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const handleAdd = (text) => {
    if (!text.trim()) return
    const newTask = { id: uuidv4(), label: text, isChecked: false }
    setTasks([...tasks, newTask])
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
