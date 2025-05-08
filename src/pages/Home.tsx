import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-root">
      <div className="home-banner">
        <div className="home-title">Jungyoon's TODO</div>
        <button className="main-btn" onClick={() => navigate('/login')}>로그인</button>
        <button className="main-btn" onClick={() => navigate('/signup')}>회원가입</button>
      </div>
    </div>
  );
};

export default Home; 