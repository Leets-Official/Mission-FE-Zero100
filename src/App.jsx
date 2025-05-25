import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Todo from './pages/Todo'
import Login from './pages/Login'
import Signup from './pages/Signup'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Todo" element={<Todo />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
