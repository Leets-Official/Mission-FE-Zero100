import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Input from '../component/Input'
import Button from '../component/Button'
import styled from 'styled-components'
import axios from 'axios'

const Container = styled.div`
  max-width: 400px;
  margin: 100px auto;
  padding: 30px;
  border-radius: 10px;
  text-align: center;
`

const LoginBox = styled.div`
  background-color: #f5f5f5;
  padding: 40px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.h2`
  margin-bottom: 30px;
`

const Form = styled.div`
  display: flex;
  align-items: flex-start;
`

const Fields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`

const FieldRow = styled.div`
  display: flex;
  align-items: center;
`

const Label = styled.label`
  width: 70px;
  font-weight: bold;
  text-align: right;
  margin-right: 10px;
`

const StyledInput = styled(Input)`
  width: 180px;
`

const LoginBtn = styled(Button)`
  width: 70px;
  height: 70px;
  margin-left: 15px;
  background-color: #444;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 3px;
`

const SignupText = styled.p`
  margin-top: 20px;
  font-size: 14px;
  cursor: pointer;
`

function Login() {
  const [id, setId] = useState('')
  const [pw, setPw] = useState('')
  const navigate = useNavigate()

  const handleLogin = async () => {
    try {
      const res = await axios.get(`http://localhost:4000/users?id=${id}`)
      const user = res.data[0]

      if (!user) {
        alert('존재하지 않는 아이디입니다. 회원가입하세요')
        return
      }

      if (user.pw != pw) {
        alert('비밀번호/아이디가 일치하지 않습니다.')
        return
      }
      //로그인 성공 시
      localStorage.setItem('user', JSON.stringify(user))
      navigate('/todo')
    } catch (err) {
      console.error(err)
      alert('오류 발생')
    }
  }

  return (
    <Container>
      <LoginBox>
        <Title>로그인</Title>
        <Form>
          <Fields>
            <FieldRow>
              <Label>아이디</Label>
              <StyledInput value={id} onChange={(e) => setId(e.target.value)} />
            </FieldRow>
            <FieldRow>
              <Label>비밀번호</Label>
              <StyledInput type='password' value={pw} onChange={(e) => setPw(e.target.value)} />
            </FieldRow>
          </Fields>
          <LoginBtn onClick={handleLogin}>로그인</LoginBtn>
        </Form>
        <SignupText onClick={() => navigate('/signup')}>회원가입</SignupText>
      </LoginBox>
    </Container>
  )
}

export default Login
