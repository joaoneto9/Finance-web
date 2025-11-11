import './style/App.css'
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import RegisterPage from './pages/RegisterPage'


function App() {


  return (
    <>
        <Header />
        <BrowserRouter>
            <Routes>
                <Route path='register' element=<RegisterPage/> />
                <Route path='home' element=<HomePage name={sessionStorage.getItem('username')} /> />
                <Route path='' element=<LoginPage/> />
            </Routes>
        </BrowserRouter>  
    </>
  )
}

export default App
