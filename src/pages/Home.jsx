import styled from 'styled-components'
import { Link } from 'react-router-dom'

function Home() {
  const Title = styled.div`
    display: flex;
    font-size: 30px;
    align-items: center;
    justify-content: center;
    font-family: 'Lato', 'sans-serif';
    margin-bottom: 30px;
  `
  const Button = styled.button`
    color: black;
    background-color: rgba(175, 168, 168, 0.55);
    border: 1px solid rgba(175, 168, 168, 0.55);
    border-radius: 30px;
    padding: 5px 70px;
    width: 250px;
    height: 40px;
  `

  const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  `

  const Text = styled.p`
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
  return (
    <Wrapper>
      <Title>
        <Text>민성's Todo</Text>
      </Title>
      <ButtonWrapper>
        <Link to="/login">
          <Button>
            <Text>로그인</Text>
          </Button>
        </Link>
        <Link to="/signup">
          <Button>
            <Text>회원가입</Text>
          </Button>
        </Link>
      </ButtonWrapper>
    </Wrapper>
  )
}

export default Home
