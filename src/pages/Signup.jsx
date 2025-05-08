// src/pages/Login.jsx
import React, { useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  max-width: 400px;
  margin: 100px auto;
  padding: 2rem;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 0;
  background-color: rgb(240, 240, 240);
`

const Title = styled.h2`
  margin-bottom: 2rem;
  font-size: 2.5rem;
`

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  margin-bottom: 2rem;
`

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
`

const Label = styled.label`
  width: 80px;
  text-align: right;
  font-size: 1.2rem;
  font-weight: bold;
`

const Input = styled.input`
  padding: 8px;
  width: 200px;
  border: 2px solid black;
  border-radius: 5px;
`

const Button = styled.button`
  width: 100px;
  height: 60px;
  background-color: rgb(86, 86, 86);
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
  border: none;
  border-radius: 8px;
  align-items: center;
`

const Signup = () => {
  const [name, setName] = useState('')
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    alert(`Name: ${name}, ID: ${id}, Password: ${password}`)
  }

  return (
    <Wrapper>
      <Title>회원가입</Title>
      <Form>
        <Column>
          <Row>
            <Label>이름</Label>
            <Input
              type='text'
              placeholder='이름을 입력하세요'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Row>
          <Row>
            <Label>아이디</Label>
            <Input
              type='text'
              placeholder='아이디를 입력하세요'
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </Row>
          <Row>
            <Label>비밀번호</Label>
            <Input
              type='password'
              placeholder='비밀번호를 입력하세요'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Row>
        </Column>
        <Button onClick={handleLogin}>회원가입</Button>
      </Form>
    </Wrapper>
  )
}

export default Signup
