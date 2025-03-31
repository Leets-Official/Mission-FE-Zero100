// import React from 'react'
import Text from './component/Text.jsx'
import Button from './component/Button.jsx'
import Category from './component/Category.jsx'
import Checkbox from './component/Checkbox.jsx'
import AddTodo from './component/AddTodo.jsx'
import Input from './component/Input.jsx'
import styled from 'styled-components'
import { useState } from 'react'
import TodoList from './component/TodoList.jsx'
import Header from './component/Header.jsx'

const StyledInput = styled.input`
  width: 80%;
  height: 30px;
  font-size: 16px;
  padding: 15px;
  margin: 0 auto;
  display: block;
`

function App() {
  const [task, setText] = useState('')
  const [category, setCategory] = useState('all')

  const handleClick = (category) => {
    setCategory(category)
    console.log(category)
  }

  const handleAdd = () => {
    alert('Added: ' + task)
  }

  return (
    <div>
      <Header />
      <AddTodo task={task} setText={setText} handleAdd={handleAdd} />
      <Category onClick={handleClick} />
      <TodoList />
    </div>
  )
}

export default App
