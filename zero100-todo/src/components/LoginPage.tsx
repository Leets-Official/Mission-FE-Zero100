import React, { useState } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import api from '../utils/api';

const Login = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      const res = await api.get(`/users?id=${id}`);
      if (res.data.length === 0) {
        setError('존재하지 않는 아이디입니다.');
        return;
      }
      const user = res.data[0];
      if (user.password !== pw) {
        setError('비밀번호가 올바르지 않습니다.');
        return;
      }
      // 로그인 성공: localStorage 저장
      localStorage.setItem('loginUser', JSON.stringify(user));
      navigate('/todo');
    } catch (err) {
      setError('로그인 중 오류가 발생했습니다.');
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff' }}>
      <div className="form-box" style={{ minWidth: 480, maxWidth: 520, background: '#f3f3f3', padding: '40px 40px', borderRadius: '12px', boxShadow: '0 2px 12px #0001' }}>
        <div style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '2.5rem', marginBottom: 40, letterSpacing: '-2px' }}>로그인</div>
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 24 }}>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 22 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <label htmlFor="id" style={{ width: 90, fontWeight: 600, fontSize: '1.35rem', textAlign: 'right' }}>아이디</label>
              <input id="id" type="text" value={id} onChange={e => setId(e.target.value)} required style={{ flex: 1, height: 40, borderRadius: 8, border: '2px solid #444', padding: '0 12px', fontSize: '1.2rem', background: '#fff' }} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <label htmlFor="pw" style={{ width: 90, fontWeight: 600, fontSize: '1.35rem', textAlign: 'right' }}>비밀번호</label>
              <input id="pw" type="password" value={pw} onChange={e => setPw(e.target.value)} required style={{ flex: 1, height: 40, borderRadius: 8, border: '2px solid #444', padding: '0 12px', fontSize: '1.2rem', background: '#fff' }} />
            </div>
          </div>
          <button
            type="submit"
            style={{
              width: 120,
              height: 110,
              background: '#444',
              color: '#fff',
              border: 'none',
              borderRadius: 12,
              fontWeight: 'bold',
              fontSize: '1.3rem',
              cursor: 'pointer',
              marginLeft: 15,
              boxShadow: '2px 2px 6px #0002',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            로그인
          </button>
        </form>
        {error && <div style={{ color: 'red', textAlign: 'center', marginTop: 18 }}>{error}</div>}
        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <span style={{ color: '#222', fontWeight: 600, fontSize: '1.2rem', cursor: 'pointer' }} onClick={() => navigate('/signup')}>회원가입</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
