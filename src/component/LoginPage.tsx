import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>로그인</h2>

      <div style={styles.formWrapper}>
        <div style={styles.inputContainer}>
          <div style={styles.inputRow}>
            <label style={styles.label}>아이디</label>
            <input type="text" style={styles.input} placeholder="abcde"
            value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>

          <div style={styles.inputRow}>
            <label style={styles.label}>비밀번호</label>
            <input type="password" style={styles.input} placeholder="••••"
            value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
        </div>

        <button style={styles.loginButton}>로그인</button>
      </div>

      <div style={styles.signupText} onClick={() => navigate("/signup")}>
        회원가입
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#f0f0f0",
    height: "100vh",
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "sans-serif",
  },
  title: {
    fontSize: "2rem",
    fontWeight: "700",
    marginBottom: "40px",
  },
  formWrapper: {
    display: "flex",
    flexDirection: "row" as const,
    alignItems: "center",
    gap: "20px",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "10px",
  },
  inputRow: {
    display: "flex",
    alignItems: "center",
  },
  label: {
    width: "80px",
    fontSize: "1rem",
    fontWeight: "600",
    textAlign: "right" as const,
    marginRight: "10px",
  },
  input: {
    width: "200px",
    padding: "8px",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  loginButton: {
    backgroundColor: "#444",
    color: "#fff",
    padding: "30px 20px",
    border: "none",
    borderRadius: "6px",
    fontSize: "1rem",
    fontWeight: "600",
    cursor: "pointer",
  },
  signupText: {
    marginTop: "30px",
    color: "#333",
    fontSize: "1rem",
    fontWeight: "600",
    cursor: "pointer",
  },
};

export default LoginPage;
