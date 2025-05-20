import React from 'react'
import Header from '../components/Header'
import AddTodo from '../components/AddTodo'
import Category from '../components/Category'
import TodoList from '../components/TodoList'
import styled from 'styled-components'

const TodoWrapper = styled.div`
  max-width: 600px;
  margin: auto;
  padding: 2rem;
`

const TodoPage = ({ todos, setTodos, filter, setFilter }) => {
  return (
    <TodoWrapper>
      <Header />
      <AddTodo todos={todos} setTodos={setTodos} />
      <Category filter={filter} setFilter={setFilter} />
      <TodoList todos={todos} />
    </TodoWrapper>
  )
}

export default TodoPage
