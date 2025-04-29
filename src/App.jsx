import React, { useState } from 'react'
import styled from 'styled-components'
import AddTodo from './components/AddTodo.jsx'
import TodoList from './components/TodoList.jsx'
import Category from './components/Category.jsx'
import Header from './components/Header.jsx'
import { TodoContext } from './context/TodoContext'

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
  const [todos, setTodos] = useState([
    { id: 1, text: 'Eat', completed: false, isEditing: false },
    { id: 2, text: 'Sleep', completed: false, isEditing: false },
    { id: 3, text: 'Repeat', completed: false, isEditing: false },
  ])

  const [filter, setFilter] = useState('all')

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
      prev.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              isEditing: true,
              originalText: todo.text,
              text: `New name for ${todo.text}`,
            }
          : todo,
      ),
    )
  }

  const handleSave = (id, newText) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, text: newText, isEditing: false } : todo)),
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
