import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// 페이지 컴포넌트 import
import HomePage from './pages/HomePage';     // 이전 단계에서 생성
import LoginPage from './pages/LoginPage';    // 이전 단계에서 생성
import SignupPage from './pages/SignupPage';  // 이전 단계에서 생성
import TodoPage from './pages/TodoPage';    // 방금 수정한 TodoPage

import './App.css'; // 전역 스타일 및 로그인/회원가입 UI 스타일 포함

function App() {
  return (
    <Router>
      <div className="app-container"> {/* 전체 앱을 감싸는 컨테이너 */}
        <h1 className="app-title">OO's TODO</h1> {/* 모든 페이지 상단에 표시될 제목 */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/todo" element={<TodoPage />} /> {/* Todo 페이지 라우트 */}
          {/* 일치하는 라우트가 없을 경우 루트 페이지로 리다이렉트 (선택 사항) */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;