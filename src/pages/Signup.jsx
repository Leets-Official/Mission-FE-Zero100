// src/pages/Login.jsx
import React, { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import axios from '../api/axios'
import StyledButton from '../components/common/Button'

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

const SignupButton = styled(StyledButton)`
  width: 110px;
  height: 60px;
  background-color: rgb(86, 86, 86);
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
  border: none;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.9rem;
`

const Signup = () => {
  const [name, setName] = useState('')
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSignup = async () => {
    try {
      const res = await axios.get('/users', {
        params: { username: id },
      })

      const isExist = res.data.some((user) => user.username === id)

      if (isExist) {
        setError('이미 존재하는 아이디입니다.')
      } else {
        await axios.post('/users', {
          username: id,
          password,
          name,
        })
        alert('회원가입 성공!')
        navigate('/login')
      }
    } catch (err) {
      console.error(err)
      setError('서버 연결에 실패했습니다.')
    }
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
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <SignupButton type='button' onClick={handleSignup}>
          회원가입
        </SignupButton>
      </Form>
    </Wrapper>
  )
}

export default Signup
