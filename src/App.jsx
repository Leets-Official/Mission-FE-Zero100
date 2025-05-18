// src/App.jsx

import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Todo from "./pages/Todo";
import Home from "./pages/Home"; 

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />         
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/todo" element={<Todo />} />
    </Routes>
  );
}

export default App;
