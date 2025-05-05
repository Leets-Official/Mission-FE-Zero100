import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Login = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // 실제 인증 로직은 생략, 바로 Todo로 이동
    navigate('/todo');
  };

  return (
    <div className="login-signup-container">
      <h2 className="form-title">로그인</h2>
      <form className="form-box" onSubmit={handleLogin}>
        <label>아이디
          <input type="text" value={id} onChange={e => setId(e.target.value)} required />
        </label>
        <label>비밀번호
          <input type="password" value={pw} onChange={e => setPw(e.target.value)} required />
        </label>
        <button className="form-btn" type="submit">로그인</button>
      </form>
      <div className="form-link">
        <span onClick={() => navigate('/signup')}>회원가입</span>
      </div>
    </div>
  );
};

export default Login; 