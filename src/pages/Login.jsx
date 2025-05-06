import styled from 'styled-components'
import { Link } from 'react-router-dom'

function Login() {
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
  return (
    <TotalWrapper>
      <TitleText>로그인</TitleText>
      <InputButtonWrapper>
        <InputWrapper>
          <InputFieldWrapper>
            <Text>아이디</Text>
            <StyleInput type="text" />
          </InputFieldWrapper>
          <InputFieldWrapper>
            <Text>비밀번호</Text>
            <StyleInput type="password" />
          </InputFieldWrapper>
        </InputWrapper>
        <LoginButton>로그인</LoginButton>
      </InputButtonWrapper>
      <StyleLink to="/Signup">
        <SignUp>회원가입</SignUp>
      </StyleLink>
    </TotalWrapper>
  )
}
export default Login
