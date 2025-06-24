import { useNavigate } from "react-router-dom";

export default function MainPage() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "#ffffff",
      }}
    >
      <h1
        style={{
          fontSize: "2.2rem",
          fontWeight: "bold",
          marginBottom: "40px",
          marginTop: 0,
        }}
      >
        JungYoon's TODO
      </h1>
      <button
        style={{
          width: "260px",
          height: "45px",
          borderRadius: "20px",
          background: "#e5e5e5",
          border: "none",
          fontSize: "1.1rem",
          fontWeight: "bold",
          marginBottom: "15px",
          cursor: "pointer",
        }}
        onClick={() => navigate("/login")}
      >
        로그인
      </button>
      <button
        style={{
          width: "260px",
          height: "45px",
          borderRadius: "20px",
          background: "#e5e5e5",
          border: "none",
          fontSize: "1.1rem",
          fontWeight: "bold",
          cursor: "pointer",
        }}
        onClick={() => navigate("/register")}
      >
        회원가입
      </button>
    </div>
  );
} 