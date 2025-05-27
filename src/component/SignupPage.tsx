import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignupPage: React.FC = () => {
  const navigate = useNavigate();

  const [name, setName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const handleSignup = async (): Promise<void> => {
    try {
      const trimmedUsername = username.trim();
      const trimmedName = name.trim();

      if (!trimmedName || !trimmedUsername || !password) {
        setErrorMsg("모든 항목을 입력해주세요.");
        return;
      }

      const res = await axios.get<{ username: string }[]>(
        `http://localhost:3001/users?username=${trimmedUsername}`
      );

      console.log("GET /users?username= 응답:", res.data);

      if (res.data.length > 0) {
        setErrorMsg("이미 존재하는 아이디입니다!");
        return;
      }

      await axios.post("http://localhost:3001/users", {
        name: trimmedName,
        username: trimmedUsername,
        password,
      });

      alert("회원가입 성공!");
      navigate("/login");
    } catch (error) {
      console.error("회원가입 오류:", error);
      setErrorMsg("서버 오류가 발생했습니다!");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>회원가입</h2>

      <div style={styles.formWrapper}>
        <div style={styles.inputContainer}>
          <div style={styles.inputRow}>
            <label style={styles.label}>이름</label>
            <input
              type="text"
              style={styles.input}
              placeholder="김철수"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div style={styles.inputRow}>
            <label style={styles.label}>아이디</label>
            <input
              type="text"
              style={styles.input}
              placeholder="chulsu"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div style={styles.inputRow}>
            <label style={styles.label}>비밀번호</label>
            <input
              type="password"
              style={styles.input}
              placeholder="••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button style={styles.signupButton} onClick={handleSignup}>
            회원가입
          </button>

          <p style={{ color: "red", marginTop: "10px" }}>{errorMsg}</p>
        </div>
      </div>
    </div>
  );
};

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
    flexDirection: "column",
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
} as { [key: string]: React.CSSProperties };

export default SignupPage;
