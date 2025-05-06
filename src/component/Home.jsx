import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Button from './Button'

const Container = styled.div`
  text-align: center;
  margin-top: 80px;
`

const StyledButton = styled(Button)`
  width: 200px;
  margin: 15px auto;
  display: block;
  padding: 10px 0;
  font-size: 16px;
  font-weight: bold;
  border-radius: 999px;
  border: none;
  background-color: rgb(212, 209, 209);
  cursor: pointer;
`

const Title = styled.h1`
  font-weight: bold;
  font-size: 25px;
  margin-bottom: 40px;
`

function Home() {
  const navigate = useNavigate()

  return (
    <Container>
      <Title>지민's TODO</Title>
      <StyledButton onClick={() => navigate('/login')}>로그인</StyledButton>
      <StyledButton onClick={() => navigate('/signup')}>회원가입</StyledButton>
    </Container>
  )
}

export default Home
