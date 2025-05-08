import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // 실제 회원가입 로직은 생략, 바로 로그인으로 이동
    navigate('/login');
  };

  return (
    <div className="login-signup-container">
      <div className="form-title">회원가입</div>
      <form className="form-box" onSubmit={handleSignup}>
        <div className="form-row">
          <label htmlFor="name">이름</label>
          <input id="name" type="text" value={name} onChange={e => setName(e.target.value)} required />
        </div>
        <div className="form-row">
          <label htmlFor="id">아이디</label>
          <input id="id" type="text" value={id} onChange={e => setId(e.target.value)} required />
        </div>
        <div className="form-row">
          <label htmlFor="pw">비밀번호</label>
          <input id="pw" type="password" value={pw} onChange={e => setPw(e.target.value)} required />
        </div>
        <button className="login-btn" type="submit">회원가입</button>
      </form>
    </div>
  );
};

export default Signup; 