// src/pages/Signup.jsx

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

const ErrorMessage = styled.p`
  color: red;
  text-align: center;
  margin-top: 1rem;
`;

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async () => {
    try {
      const res = await axios.get(`http://localhost:3001/users?username=${username}`);
      if (res.data.length > 0) {
        setError("이미 존재하는 아이디입니다.");
        return;
      }

      await axios.post("http://localhost:3001/users", {
        name,
        username,
        password,
      });

      alert("회원가입 성공! 로그인 페이지로 이동합니다.");
      navigate("/login");
    } catch (err) {
      console.error(err);
      setError("회원가입 중 오류가 발생했습니다.");
    }
  };

  return (
    <Box>
      <Title>회원가입</Title>

      <FormRow>
        <Label htmlFor="name">이름</Label>
        <Input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </FormRow>

      <FormRow>
        <Label htmlFor="id">아이디</Label>
        <Input id="id" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </FormRow>

      <FormRow>
        <Label htmlFor="pw">비밀번호</Label>
        <Input id="pw" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </FormRow>

      <SignupButton onClick={handleSignup}>회원가입</SignupButton>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Box>
  );
}

export default Signup;
