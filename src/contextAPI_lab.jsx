import React, { createContext, useContext, useState } from 'react';

// 1. Context 생성
const AuthContext = createContext();

// 2. AuthProvider 컴포넌트
function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (username) => {
    setUser({ name: username });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// 3. Navbar 컴포넌트
function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <div style={{ padding: '10px', background: '#f0f0f0' }}>
      {user ? (
        <>
          <span>환영합니다, {user.name}님!</span>
          <button
            onClick={logout}
            style={{ marginLeft: '10px', padding: '5px 10px' }}
          >
            로그아웃
          </button>
        </>
      ) : (
        <span>로그인해주세요.</span>
      )}
    </div>
  );
}

// 4. LoginForm 컴포넌트
function LoginForm() {
  const { user, login } = useContext(AuthContext);
  const [inputValue, setInputValue] = useState('');

  if (user) return null;

  return (
    <div style={{ margin: '20px' }}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="사용자 이름을 입력하세요"
        style={{ padding: '5px' }}
      />
      <button
        onClick={() => login(inputValue)}
        style={{ marginLeft: '10px', padding: '5px 10px' }}
      >
        로그인
      </button>
    </div>
  );
}

// 5. App 컴포넌트
function App() {
  return (
    <AuthProvider>
      <div>
        <Navbar />
        <LoginForm />
      </div>
    </AuthProvider>
  );
}

export default App;