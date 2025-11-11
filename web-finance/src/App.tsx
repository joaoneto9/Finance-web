import './style/App.css'
import Header from './components/Header'
import BrowserRouterComponent from './components/BrowserRouterComponent'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import HomePage from './pages/HomePage'

function App() {

  return (
    <>
        <Header />
        <BrowserRouterComponent
            pages={
                [
                    {name: "Login", reactPage: <LoginPage/>},
                    {name: "Register", reactPage: <RegisterPage />},
                    {name: "Home", reactPage: <HomePage name={sessionStorage.getItem('username')}/>}
                ]
            } 
        />    
    </>
  )
}

export default App
