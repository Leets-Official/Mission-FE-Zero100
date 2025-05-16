// src/pages/Login.jsx

import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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

const LoginButton = styled.button`
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
      localStorage.setItem("user", JSON.stringify(user)); // 로그인 정보 저장
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

      <FormRow>
        <Label htmlFor="id">아이디</Label>
        <Input id="id" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </FormRow>

      <FormRow>
        <Label htmlFor="pw">비밀번호</Label>
        <Input id="pw" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </FormRow>

      <LoginButton onClick={handleLogin}>로그인</LoginButton>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Box>
  );
}

export default Login;
