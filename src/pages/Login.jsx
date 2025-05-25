import { Link } from "react-router-dom";
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: 80px 220px auto;  
  grid-template-rows: auto auto;
  column-gap: 0.8rem;                    
  row-gap: 1rem;
  align-items: center;
`;

const Label = styled.label`
  text-align: right;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 0.4rem 0.6rem;
  font-size: 0.7rem;
  border: 2px solid #000;
  border-radius: 6px;
  width: 95%;          
`;

const LoginButton = styled.button`
  grid-column: 3;
  grid-row: 1 / span 2;   
  align-self: stretch;
  padding: 0.8rem 1.2rem;
  background: #444;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  white-space: nowrap;
  cursor: pointer;
`;

const BottomLink = styled(Link)`
  display: block;
  margin-top: 1.5rem;
  text-align: center;
  font-size: 0.9rem;
  color: black;
  text-decoration: none; 
`;

function Login() {
  return (
    <Box>
      <Title>로그인</Title>

      <Grid>
        <Label htmlFor="id">아이디</Label>
        <Input id="id" type="text" />
        <LoginButton>로그인</LoginButton>

        <Label htmlFor="pw">비밀번호</Label>
        <Input id="pw" type="password" />
      </Grid>

      <BottomLink to="/signup">회원가입</BottomLink>
    </Box>
  );
}

export default Login;
