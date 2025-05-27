import React, {useEffect, useState} from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import TodoPage from "./component/TodoPage";
import LoginPage from "./component/LoginPage";
import SignupPage from "./component/SignupPage";

function App(){
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser =localStorage.getItem("user");
    if(savedUser){
      setUser(JSON.parse(savedUser));
    }
  }, []);
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/todo" element={<TodoPage />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/signup" element={<SignupPage />}/>
      </Routes>
    </Router>
  );
}

function Home(){
  const navigate =useNavigate();

  const buttonStyle = {
    width: "200px",
    padding: "10px 0",
    margin: "20px auto",
    display: "block",
    backgroundColor: "#ddd",
    border: "none",
    borderRadius: "30px",
    fontSize: "1.1rem",
    fontWeight: "600",
  };

  const titleStyle = {
    fontSize: "2rem",
    fontWeight: "700",
    marginBottom: "40px",
  };

  return(
    <div style={{textAlign:"center"}}>
      <h1 style={titleStyle}>Tayie's TODO</h1>
      <button style={buttonStyle} onClick={() => navigate("/login")}>로그인</button>
      <button style={buttonStyle} onClick={() => navigate("/signup")}>회원가입</button>
    </div>
  );
}

export default App;