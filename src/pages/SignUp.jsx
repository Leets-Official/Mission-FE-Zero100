import styled from 'styled-components'
import Input from '../component/Input'
import Button from '../component/Button'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Container = styled.div`
  max-width: 400px;
  margin: 100px auto;
  padding: 30px;
  border-radius: 10px;
  text-align: center;
`

const SignupBox = styled.div`
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

const FieldRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`

const Label = styled.label`
  width: 70px;
  font-weight: bold;
  text-align: right;
  margin-right: 10px;
`

const StyledInput = styled(Input)`
  width: 150px;
`

const SignupBtn = styled(Button)`
  width: 100px;
  height: 30px;
  border-radius: 3px;
  border: none;
  background-color: #444;
  color: white;
  margin-top: 10px;
  cursor: pointer;
`

function Signup() {
  const [name, setName] = useState('')
  const [id, setId] = useState('')
  const [pw, setPw] = useState('')
  const navigate = useNavigate()

  return (
    <Container>
      <SignupBox>
        <Title>회원가입</Title>
        <FieldRow>
          <Label>이름</Label>
          <StyledInput value={name} onChange={(e) => setName(e.target.value)} />
        </FieldRow>
        <FieldRow>
          <Label>아이디</Label>
          <StyledInput value={id} onChange={(e) => setId(e.target.value)} />
        </FieldRow>
        <FieldRow>
          <Label>비밀번호</Label>
          <StyledInput type='password' value={pw} onChange={(e) => setPw(e.target.value)} />
        </FieldRow>
        <SignupBtn onClick={() => navigate('/login')}>회원가입</SignupBtn>
      </SignupBox>
    </Container>
  )
}

export default Signup
