import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../utils/api';
import '../App.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!id || !pw || !name) {
      setError('모든 항목을 입력하세요.');
      return;
    }
    try {
      // 아이디 중복 체크
      const res = await api.get(`/users?id=${id}`);
      if (res.data.length > 0) {
        setError('이미 존재하는 아이디입니다.');
        return;
      }
      // 회원가입 요청
      await api.post('/users', { id, name, password: pw });
      alert('회원가입이 완료되었습니다!');
      navigate('/login');
    } catch (err) {
      setError('회원가입 중 오류가 발생했습니다.');
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff' }}>
      <div style={{ minWidth: 340, maxWidth: 380, background: '#f3f3f3', padding: '40px 40px', borderRadius: '12px', boxShadow: '0 2px 12px #0001' }}>
        <div style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '2.5rem', marginBottom: 40, letterSpacing: '-2px' }}>회원가입</div>
        <form onSubmit={handleSignup} style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <label htmlFor="name" style={{ width: 90, fontWeight: 600, fontSize: '1.35rem', textAlign: 'right' }}>이름</label>
            <input id="name" type="text" value={name} onChange={e => setName(e.target.value)} required style={{ flex: 1, minWidth: 160, maxWidth: 160, height: 40, borderRadius: 8, border: '2px solid #444', padding: '0 12px', fontSize: '1.2rem', background: '#fff', marginLeft: 0 }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <label htmlFor="id" style={{ width: 90, fontWeight: 600, fontSize: '1.35rem', textAlign: 'right' }}>아이디</label>
            <input id="id" type="text" value={id} onChange={e => setId(e.target.value)} required style={{ flex: 1, minWidth: 160, maxWidth: 160, height: 40, borderRadius: 8, border: '2px solid #444', padding: '0 12px', fontSize: '1.2rem', background: '#fff', marginLeft: 0 }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <label htmlFor="pw" style={{ width: 90, fontWeight: 600, fontSize: '1.35rem', textAlign: 'right' }}>비밀번호</label>
            <input id="pw" type="password" value={pw} onChange={e => setPw(e.target.value)} required style={{ flex: 1, minWidth: 160, maxWidth: 160, height: 40, borderRadius: 8, border: '2px solid #444', padding: '0 12px', fontSize: '1.2rem', background: '#fff', marginLeft: 0 }} />
          </div>
          {error && <div style={{ color: 'red', textAlign: 'center', marginTop: 10 }}>{error}</div>}
          <button type="submit" style={{ width: 150, height: 55, background: '#444', color: '#fff', border: 'none', borderRadius: 10, fontWeight: 'bold', fontSize: '1.4rem', cursor: 'pointer', margin: '35px auto 0 auto', boxShadow: '2px 2px 6px #0002', display: 'block' }}>회원가입</button>
        </form>
      </div>
    </div>
  );
};

export default Signup; 