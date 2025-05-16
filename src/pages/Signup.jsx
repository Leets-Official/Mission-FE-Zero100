import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import api from '../api'

const TitleText = styled.p`
  font-size: 30px;
  font-family: 'Lato', 'sans-serif';
  font-weight: 600;
  text-align: center;
  margin-bottom: 20px;
`
const StyleInput = styled.input`
  width: 100px;
  flex-grow: 1;
  font-size: 10px;
  padding: 5px;
  margin: 0;
  border: 1px solid #ccc;
  border-radius: 6px;
  box-sizing: border-box;
`
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 250px;
  margin-left: 20px;
`

const Text = styled.p`
  flex: 1;
  font-weight: 500;
  margin: 0;
  text-align: right;
  margin-right: 10px;
`

const InputFieldWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`

const LoginButton = styled.button`
  width: 80px;
  height: 40px;
  color: white;
  background-color: rgba(59, 56, 56, 0.55);
  border-radius: 3px;
  border: 1px solid rgb(0, 0, 0);
`

const TotalWrapper = styled.div`
  background-color: rgba(208, 205, 212, 0.73);
  height: 300px;
  margin-top: 30px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`

function Signup() {
  const navigate = useNavigate()

  //1. 상태 설정
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  //2. 회원가입 함수
  const handleSignup = async () => {
    if (!name || !email || !password) {
      alert('모든 항목을 입력하세요.')
      return
    }

    try {
      //이메일 중복 체크
      const res = await api.get(`/users?email=${email}`)
      if (res.data.length > 0) {
        alert('이미 존재하는 이메일입니다.')
        return
      }

      await api.post('/users', {
        name,
        email,
        password,
      })

      alert('회원가입 성공!')
      navigate('/login')
    } catch (error) {
      console.error('회원가입 실패:', error)
      alert('회원가입에 실패했습니다.')
    }
  }

  return (
    <TotalWrapper>
      <TitleText>회원가입</TitleText>

      <InputWrapper>
        <InputFieldWrapper>
          <Text>이름</Text>
          <StyleInput
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </InputFieldWrapper>
        <InputFieldWrapper>
          <Text>아이디</Text>
          <StyleInput
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputFieldWrapper>
        <InputFieldWrapper>
          <Text>비밀번호</Text>
          <StyleInput
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputFieldWrapper>
      </InputWrapper>
      <LoginButton onClick={handleSignup}>회원가입</LoginButton>
    </TotalWrapper>
  )
}

export default Signup
