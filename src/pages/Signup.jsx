import styled from "styled-components";

const Box = styled.div`
  margin: 4rem auto;
  width: fit-content;
  padding: 2rem;
  background: #f7f7f7;
  border-radius: 8px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2rem;
  font-weight: bold;
`;

const FormRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  width: 80px;
  font-weight: bold;
  text-align: right;
  margin-right: 1rem;
`;

const Input = styled.input`
  padding: 0.4rem 0.8rem;
  font-size: 0.7rem;
  border: 2px solid black;
  border-radius: 6px;
  width: 200px;
`;

const SignupButton = styled.button`
  display: block;
  margin: 2rem auto 0;
  padding: 0.8rem 2rem;
  background: #444;               
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

function Signup() {
  return (
    <Box>
      <Title>회원가입</Title>

      <FormRow>
        <Label htmlFor="name">이름</Label>
        <Input id="name" type="text" />
      </FormRow>

      <FormRow>
        <Label htmlFor="id">아이디</Label>
        <Input id="id" type="text" />
      </FormRow>

      <FormRow>
        <Label htmlFor="pw">비밀번호</Label>
        <Input id="pw" type="password" />
      </FormRow>

      <SignupButton>회원가입</SignupButton>
    </Box>
  );
}

export default Signup;
