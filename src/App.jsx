import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import AddTodo from './components/AddTodo.jsx'
import TodoList from './components/TodoList.jsx'
import Category from './components/Category.jsx'
import Header from './components/Header.jsx'
import { TodoContext } from './context/TodoContext'
import { v4 as uuidv4 } from 'uuid'

// What needs to be done?
const SubTitle = styled.p`
  text-align: center;
  font-size: 1.5rem;
  margin: 1px 10px;
  flex: none;
`

//전체 Todo 앱을 감싸는 큰 박스
const AppWrapper = styled.div`
  max-width: 600px;
  width: 100%;
  height: 100vh;
  margin: auto;
  padding: 1rem; // ✅ 기존 0 2rem → 전체 1rem로 압축
  background-color: white;
  //border: 1px solid #ccc;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; // ✅ 공간 넓히지 않게 변경
  gap: 0.5rem;
  text-align: left; // ✅ 컴포넌트 간격 압축
  box-sizing: border-box;
`

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

  return (
    <AppWrapper>
      <TodoContext.Provider
        value={{
          onToggle: handleToggle,
          onDelete: handleDelete,
          onEdit: handleEdit,
          onSave: handleSave,
          onCancel: handleCancel,
        }}
      >
        <Header />
        <SubTitle>What needs to be done?</SubTitle>
        <AddTodo setTodos={setTodos} />
        <Category filter={filter} setFilter={setFilter} />
        <TodoList todos={filteredTodos} />
      </TodoContext.Provider>
    </AppWrapper>
  )
}

export default App
