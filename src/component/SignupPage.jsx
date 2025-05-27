import React from "react";
import { useNavigate } from "react-router-dom";

function SignupPage() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>회원가입</h2>

      <div style={styles.formWrapper}>
        <div style={styles.inputContainer}>
          <div style={styles.inputRow}>
            <label style={styles.label}>이름</label>
            <input type="text" style={styles.input} placeholder="김철수" />
          </div>

          <div style={styles.inputRow}>
            <label style={styles.label}>아이디</label>
            <input type="text" style={styles.input} placeholder="chulsu" />
          </div>

          <div style={styles.inputRow}>
            <label style={styles.label}>비밀번호</label>
            <input type="password" style={styles.input} placeholder="••••" />
          </div>

          <button style={styles.signupButton}>회원가입</button>
        </div>
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
    flexDirection: "column", // 수정된 부분
    alignItems: "center",
    gap: "20px",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
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
  signupButton: {
    backgroundColor: "#444",
    color: "#fff",
    padding: "15px 20px",
    border: "none",
    borderRadius: "6px",
    fontSize: "1.5rem",
    fontWeight: "400",
    cursor: "pointer",
    marginTop: "20px",
    width: "150px",
    alignSelf: "center",
  },
};

export default SignupPage;
