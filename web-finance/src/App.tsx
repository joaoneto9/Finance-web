import './style/App.css'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import BrowserRouterComponent from './components/BrowserRouterComponent'


function App() {

  return (
    <>
        <Header />
        <BrowserRouterComponent  
            pages={
                [
                    {name: "Login", reactPage: <LoginPage/>},
                    {name: "Register", reactPage: <RegisterPage />},
                    {name: "Home", reactPage: <HomePage name='João'/>},
                    {name: "", reactPage: <LoginPage />}
                ]
            } />
    </>
  )
}

export default App
