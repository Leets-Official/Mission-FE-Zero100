import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TodoPage from './pages/Todo'
import MainPage from './pages/Main'
import LoginPage from './pages/Login'
import SignupPage from './pages/Signup'
import { TodoContext } from './context/TodoContext'

const App = () => {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos')
    return saved ? JSON.parse(saved) : []
  })

  const [filter, setFilter] = useState('all')

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed
    if (filter === 'completed') return todo.completed
    return true
  })

  const handleToggle = (id) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)),
    )
  }

  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const handleEdit = (id) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          const baseText = todo.originalText ?? todo.text
          return {
            ...todo,
            isEditing: true,
            originalText: baseText,
            text: `New name for ${baseText}`,
          }
        }
        return todo
      }),
    )
  }

  const handleSave = (id, newText) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, text: newText, isEditing: false } : todo)),
    )
  }

  const handleCancel = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isEditing: false, text: todo.originalText } : todo,
      ),
    )
  }

  const contextValue = {
    onToggle: handleToggle,
    onDelete: handleDelete,
    onEdit: handleEdit,
    onSave: handleSave,
    onCancel: handleCancel,
  }

  return (
    <TodoContext.Provider value={contextValue}>
      <Router>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route
            path='/todo'
            element={
              <TodoPage todos={todos} setTodos={setTodos} filter={filter} setFilter={setFilter} />
            }
          />
        </Routes>
      </Router>
    </TodoContext.Provider>
  )
}

export default App
