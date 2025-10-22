import './style/App.css'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
function App() {

  return (
    <>
        <BrowserRouter>
            <nav>
                <Link to="/login">Login</Link> | {" "}
                <Link to="/home">home</Link> | {" "}
                <Link to="/register">Register</Link> 
            </nav>

            <Routes>
                <Route path='/login'element={<LoginPage />}/>
                <Route path='/home'element={<HomePage name={"João Neto"} />}/>
                <Route path='/register'element={<RegisterPage />}/>
            </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
