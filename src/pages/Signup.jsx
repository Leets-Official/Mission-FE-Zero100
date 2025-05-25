import styled from 'styled-components'
import { Link } from 'react-router-dom'

function Signup() {
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
  return (
    <TotalWrapper>
      <TitleText>회원가입</TitleText>

      <InputWrapper>
        <InputFieldWrapper>
          <Text>이름</Text>
          <StyleInput type="text" />
        </InputFieldWrapper>
        <InputFieldWrapper>
          <Text>아이디</Text>
          <StyleInput type="text" />
        </InputFieldWrapper>
        <InputFieldWrapper>
          <Text>비밀번호</Text>
          <StyleInput type="password" />
        </InputFieldWrapper>
      </InputWrapper>
      <LoginButton>회원가입</LoginButton>
    </TotalWrapper>
  )
}
export default Signup
