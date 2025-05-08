import React, { useState } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // 실제 인증 로직 생략
    navigate('/todo');
  };

  return (
    <div className="login-signup-container">
      <div className="form-title">로그인</div>
      <form className="form-box" onSubmit={handleLogin}>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'center' }}>
          <div>
            <div className="form-row">
              <label htmlFor="id">아이디</label>
              <input id="id" type="text" value={id} onChange={e => setId(e.target.value)} required />
            </div>
            <div className="form-row">
              <label htmlFor="pw">비밀번호</label>
              <input id="pw" type="password" value={pw} onChange={e => setPw(e.target.value)} required />
            </div>
          </div>
          <button className="login-btn" type="submit">로그인</button>
        </div>
      </form>
      <div className="form-link">
        <span onClick={() => navigate('/signup')}>회원가입</span>
      </div>
    </div>
  );
};

export default Login;
