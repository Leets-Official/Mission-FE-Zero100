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
      <h2 className="form-title">회원가입</h2>
      <form className="form-box" onSubmit={handleSignup}>
        <label>이름
          <input type="text" value={name} onChange={e => setName(e.target.value)} required />
        </label>
        <label>아이디
          <input type="text" value={id} onChange={e => setId(e.target.value)} required />
        </label>
        <label>비밀번호
          <input type="password" value={pw} onChange={e => setPw(e.target.value)} required />
        </label>
        <button className="form-btn" type="submit">회원가입</button>
      </form>
    </div>
  );
};

export default Signup; 