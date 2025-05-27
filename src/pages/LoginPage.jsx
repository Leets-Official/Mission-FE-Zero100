import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    console.log('Login attempt:', { id, password });
    if (id === 'abcde' && password === '1234') { // 임시 로그인 성공 조건
      alert('로그인 성공!');
      navigate('/todo');
    } else {
      setError('•');
    }
  };

  return (
    <div className="form-container">
      <h2>로그인</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="login-id">아이디</label>
          <input
            type="text"
            id="login-id"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="abcde"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="login-password">비밀번호</label>
          <input
            type="password"
            id="login-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••"
            required
          />
        </div>
        {error && <div className="error-message" style={{ textAlign: 'right', paddingRight: '10px', color: 'red', height: '20px' }}>{error}</div>}
        <button type="submit">로그인</button>
      </form>
      <button onClick={() => navigate('/signup')} className="login-form-signup-button">
        회원가입
      </button>
    </div>
  );
}

export default LoginPage;