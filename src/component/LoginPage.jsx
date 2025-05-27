import React from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>로그인</h2>

      <div style={styles.formWrapper}>
        <div style={styles.inputContainer}>
          <div style={styles.inputRow}>
            <label style={styles.label}>아이디</label>
            <input type="text" style={styles.input} placeholder="abcde" />
          </div>

          <div style={styles.inputRow}>
            <label style={styles.label}>비밀번호</label>
            <input type="password" style={styles.input} placeholder="••••" />
          </div>
        </div>

        <button style={styles.loginButton}>로그인</button>
      </div>

      <div style={styles.signupText} onClick={() => navigate("/signup")}>
        회원가입
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#f0f0f0",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
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
    flexDirection: "row",
    alignItems: "center",
    gap: "20px",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
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
    textAlign: "right",
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
