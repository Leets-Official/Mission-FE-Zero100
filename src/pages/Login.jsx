import { useState } from 'react'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

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

const StyleLink = styled(Link)`
  text-decoration: none;
  color: black;
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

const InputButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
`

const Text = styled.p`
  flex: 1;
  font-weight: 00;
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
  width: 60px;
  height: 65px;
  color: white;
  background-color: rgba(59, 56, 56, 0.55);
  border-radius: 3px;
  border: 1px solid rgb(0, 0, 0);
`
const SignUp = styled.p`
  font-weight: 500;
  text-align: center;
  margin-top: 30px;
`

const TotalWrapper = styled.div`
  background-color: rgba(208, 205, 212, 0.73);
  height: 300px;
  margin-top: 30px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3001/users?email=${email}&password=${password}`
      )
      if (res.data.length > 0) {
        const user = res.data[0]
        localStorage.setItem('user', JSON.stringify(user))
        alert(`${user.name}님 환영합니다!`)
        navigate('/Todo')
      } else {
        alert('아이디 또는 비밀번호가 틀렸습니다.')
      }
    } catch (error) {
      alert('로그인 중 오류가 발생했습니다.')
      console.error(error)
    }
  }
  return (
    <TotalWrapper>
      <TitleText>로그인</TitleText>
      <InputButtonWrapper>
        <InputWrapper>
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
        <LoginButton onClick={handleLogin}>로그인</LoginButton>
      </InputButtonWrapper>
      <StyleLink to="/Signup">
        <SignUp>회원가입</SignUp>
      </StyleLink>
    </TotalWrapper>
  )
}
export default Login
