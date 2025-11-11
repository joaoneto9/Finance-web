import { useEffect, useState } from "react";
import UserInformationBox from "../components/UserInformationBox";
import loginPost from "../requests/loginUserPost";
import NavBrowser from "../components/NavBrowser";

function LoginPage() {

    const [userLoginData, setUserLoginData] = useState<Map<String, any> | null>(null);


    // realiza o login quando o userLoginData for alterado
    useEffect(() => {
        if (!userLoginData) return;

        const data = {
            email: userLoginData.get("email"),
            password: userLoginData.get("password")
        }

        const saveUsersCredential = async () => {
            const userLogin = await loginPost(data);

            if (userLogin == undefined) {
                alert("erro ao realizar o login, reveja seus dados e tente novamente");
                return;
            }

            sessionStorage.setItem('token', userLogin.token);
            sessionStorage.setItem('username', userLogin.username);

            window.location.href = "http://localhost:5173/Home"
        };

        saveUsersCredential();
    }, [userLoginData]);

    return (
        <> 
            <UserInformationBox 
                title={"Login"} 
                fields={["Email", "Password"]} setUserData={setUserLoginData}
            />
            <NavBrowser contents={[
                {link: 'register', name: 'register'}
            ]}/>
        </>

    );
}

export default LoginPage;