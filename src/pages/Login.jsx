// src/pages/Login.jsx
import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
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
  font-size: 2rem;
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
  align-items: center;
  gap: 1rem;
`

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const Subrow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 1rem;
`

const Label = styled.label`
  width: 80px;
  text-align: right;
  font-size: 1rem;
  font-weight: bold;
`

const Input = styled.input`
  padding: 8px;
  width: 200px;
  border: 2px solid black;
  border-radius: 5px;
`

const LoginButton = styled(StyledButton)`
  width: 80px;
  height: 85px;
  background-color: rgb(86, 86, 86);
  color: white;
  font-weight: bold;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
`

const BottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const StyledLink = styled(Link)`
  display: inline-block;
  margin-top: 1rem;
  color: black;
  text-decoration: none;
`

const Login = ({ setIsLoggedIn }) => {
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleLogin = async () => {
    console.log('로그인 버튼 눌림')
    try {
      const res = await axios.get('/users', {
        params: { username: id, password },
      })

      if (res.data.length > 0) {
        const user = res.data[0]
        localStorage.setItem('loginUser', JSON.stringify(user))
        setIsLoggedIn(true)
        alert(`${user.username}님 로그인 성공!`)
        navigate('/todo')
      } else {
        setError('아이디 또는 비밀번호가 틀렸습니다.')
      }
    } catch (err) {
      console.error(err)
      setError('서버 연결에 실패했습니다.')
    }
  }

  return (
    <Wrapper>
      <Title>로그인</Title>
      <Form>
        <Subrow>
          <InputGroup>
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
          </InputGroup>
          <LoginButton type='button' onClick={handleLogin}>
            로그인
          </LoginButton>
        </Subrow>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </Form>
      <StyledLink to='/signup'>회원가입</StyledLink>
    </Wrapper>
  )
}

export default Login
