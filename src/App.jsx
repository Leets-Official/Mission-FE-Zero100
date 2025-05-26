import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import AddTodo from './components/AddTodo.jsx'
import TodoList from './components/TodoList.jsx'
import Category from './components/Category.jsx'
import Header from './components/Header.jsx'
import { TodoContext } from './context/TodoContext'
import MainPage from './pages/Main.jsx'
import LoginPage from './pages/Login.jsx'
import SignupPage from './pages/Signup.jsx'
import TodoPage from './pages/Todo.jsx'

const SubTitle = styled.p`
  text-align: center;
  font-size: 1.5rem;
  margin: 1px 10px;
  flex: none;
`

const AppWrapper = styled.div`
  max-width: 600px;
  width: 100%;
  height: 100vh;
  margin: auto;
  padding: 1rem;
  background-color: white;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.5rem;
  text-align: left;
`

const App = () => {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos')
    return saved ? JSON.parse(saved) : []
  })

  const [filter, setFilter] = useState('all')
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('loginUser'))

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
          <Route path='/login' element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route
            path='/todo'
            element={
              isLoggedIn ? (
                <TodoPage todos={todos} setTodos={setTodos} filter={filter} setFilter={setFilter} />
              ) : (
                <Navigate to='/login' />
              )
            }
          />
        </Routes>
      </Router>
    </TodoContext.Provider>
  )
}

export default App
