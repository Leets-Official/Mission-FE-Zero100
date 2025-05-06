//기존 App.jsx의 렌더링 관련 UI 부분을 따로 떼어낸 구조

import React, { useContext } from 'react'
import Header from '../components/Header'
import AddTodo from '../components/AddTodo'
import Category from '../components/Category'
import TodoList from '../components/TodoList'
import styled from 'styled-components'
import { TodoContext } from '../context/TodoContext'

const SubTitle = styled.p`
  text-align: center;
  font-size: 1.5rem;
  margin: 1px 10px;
`

const PageWrapper = styled.div`
  max-width: 600px;
  margin: auto;
  padding: 1rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const TodoPage = ({ todos, setTodos, filter, setFilter }) => {
  const { onToggle, onDelete, onEdit, onSave, onCancel } = useContext(TodoContext)

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed
    if (filter === 'completed') return todo.completed
    return true
  })

  return (
    <PageWrapper>
      <Header />
      <SubTitle>What needs to be done?</SubTitle>
      <AddTodo setTodos={setTodos} />
      <Category filter={filter} setFilter={setFilter} />
      <TodoList todos={filteredTodos} />
    </PageWrapper>
  )
}

export default TodoPage
