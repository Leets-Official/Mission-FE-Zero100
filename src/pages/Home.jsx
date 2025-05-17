// src/pages/Home.jsx
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  margin-bottom: 3rem;
`;

const Button = styled(Link)`
  margin: 0.5rem;
  padding: 0.5rem 2rem;
  background:rgb(211, 211, 211);
  color: black;
  border: none;
  border-radius: 999px;
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  width: 200px;  
  text-align: center;

  &:hover {
    background:rgb(236, 236, 236);
  }
`;

function Home() {
  return (
    <Wrapper>
      <Title>세렴’s TODO</Title>
      <Button to="/login">로그인</Button>
      <Button to="/signup">회원가입</Button>
    </Wrapper>
  );
}

export default Home;
