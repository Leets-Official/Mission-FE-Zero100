// src/App.jsx - 라우팅 설정 담당
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// 라우팅할 페이지 컴포넌트들을 임포트합니다.
// 아직 HomePage, LoginPage, SignupPage 파일이 없다면 이전에 제공된 코드로 src/pages 폴더에 생성해야 합니다.
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
// 이름을 변경하고 이동시킨 TodoPage 컴포넌트를 임포트합니다.
import TodoPage from './pages/TodoPage';

import './App.css'; // App 전체에 적용될 스타일이 있다면 유지

function App() {
  return (
    // 앱 전체 레이아웃 또는 전역 스타일을 위한 컨테이너
    <div className="App">
      {/* App 전체에 적용될 헤더, 네비게이션 바 등은 Routes 바깥에 둘 수 있습니다. */}
      <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Zero100 과제 - 5주차</h1>
      <h2 style={{ textAlign: 'center' }}>로그인/회원가입 구현하기 - ui 구현</h2>

      {/* Routes 컴포넌트로 라우트를 정의 */}
      <Routes>
        {/* 루트 경로 ('/')는 HomePage 컴포넌트와 연결 */}
        <Route path="/" element={<HomePage />} />

        {/* '/login' 경로는 LoginPage 컴포넌트와 연결 */}
        <Route path="/login" element={<LoginPage />} />

        {/* '/signup' 경로는 SignupPage 컴포넌트와 연결 */}
        <Route path="/signup" element={<SignupPage />} />

        {/* '/todo' 경로는 이제 TodoPage (기존 App) 컴포넌트와 연결 */}
        <Route path="/todo" element={<TodoPage />} />

        {/* 정의되지 않은 경로에 대한 처리  */}
        {/* <Route path="*" element={<div>404 Not Found</div>} /> */}
      </Routes>

      {/* App 전체에 적용될 푸터 등은 Routes 바깥에 둘 수 있습니다. */}
    </div>
  );
}

export default App;