import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import Button from '../component/Common/Button'

const Title = styled.div`
  display: flex;
  font-size: 30px;
  align-items: center;
  justify-content: center;
  font-family: 'Lato', 'sans-serif';
  margin-bottom: 30px;
`
const NewButton = styled(Button)`
  background-color: rgba(175, 168, 168, 0.55);
  border: 1px solid rgba(175, 168, 168, 0.55);
  border-radius: 30px;
  width: 250px;
  height: 40px;
  cursor: pointer;
  font-weight: 600;
  margin: 0;
`

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  font-weight: 600;
  margin: 0;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

function Home() {
  const navigate = useNavigate()

  const goToLogin = () => {
    navigate('/login')
  }

  const goToSignup = () => {
    navigate('/signup')
  }

  return (
    <Wrapper>
      <Title>
        <text>민성&apos;s Todo</text>
      </Title>
      <ButtonWrapper>
        <NewButton onClick={goToLogin}>
          <text>로그인</text>
        </NewButton>

        <NewButton onClick={goToSignup}>
          <text>회원가입</text>
        </NewButton>
      </ButtonWrapper>
    </Wrapper>
  )
}

export default Home
