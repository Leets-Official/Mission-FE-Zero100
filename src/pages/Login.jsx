// src/pages/Login.jsx

import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
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

const ErrorMessage = styled.p`
  color: red;
  text-align: center;
  margin-top: 1rem;
`;

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.get(`http://localhost:3001/users?username=${username}&password=${password}`);
      if (res.data.length === 0) {
        setError("아이디 또는 비밀번호가 일치하지 않습니다.");
        return;
      }

      const user = res.data[0];
      localStorage.setItem("user", JSON.stringify(user));
      alert(`${user.name}님, 환영합니다!`);
      navigate("/todo");
    } catch (err) {
      console.error(err);
      setError("로그인 중 오류가 발생했습니다.");
    }
  };

  return (
    <Box>
      <Title>로그인</Title>

      <Grid>
        <Label htmlFor="id">아이디</Label>
        <Input
          id="id"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <LoginButton onClick={handleLogin}>로그인</LoginButton>

        <Label htmlFor="pw">비밀번호</Label>
        <Input
          id="pw"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Grid>

      {error && <ErrorMessage>{error}</ErrorMessage>}
      <BottomLink to="/signup">회원가입</BottomLink>
    </Box>
  );
}

export default Login;
