import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import "../style/Header.css"
import BrowserRouterComponent from "./BrowserRouterComponent";

function Header() {

    return (
        <>
            <header className="header-app">
                <div className="content">
                    <h1 className="title">Finance Web</h1>
                    <BrowserRouterComponent
                        pages={
                        [
                            {name: "Login", reactPage: <LoginPage/>},
                            {name: "Register", reactPage: <RegisterPage />},
                            {name: "Home", reactPage: <HomePage name={sessionStorage.getItem('username')}/>},
                            {name: "", reactPage: <LoginPage />}
                        ]} 
                    />               
                </div>
            </header>
        </>
    )
}

export default Header;