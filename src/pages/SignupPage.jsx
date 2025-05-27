import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignupPage() {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signup attempt:', { name, id, password });
    alert('회원가입 요청이 전송되었습니다.');
    navigate('/login');
  };

  return (
    <div className="form-container">
      <h2>회원가입</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">이름</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="김철수"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="signup-id">아이디</label>
          <input
            type="text"
            id="signup-id"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="chulsu"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="signup-password">비밀번호</label>
          <input
            type="password"
            id="signup-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••"
            required
          />
        </div>
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
}

export default SignupPage;