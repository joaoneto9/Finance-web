import { useEffect, useState } from "react";
import UserInformationBox from "../components/UserInformationBox";
import loginPost from "../requests/loginUserPost";

function LoginPage() {

    const [userLoginData, setUserLoginData] = useState<Map<String, any> | null>(null);


    // realiza o login quando o userLoginData for alterado
    useEffect(() => {
        const data = {
            email: userLoginData?.get("email"),
            password: userLoginData?.get("password")
        }

        const saveUsersCredential = async () => {
            const userLogin = await loginPost(data);

            if (userLogin == undefined)
                return;

            sessionStorage.setItem('token', userLogin.token);
            sessionStorage.setItem('username', userLogin.username);

            window.location.href = "http://localhost:5173/Home"
        };

        saveUsersCredential();
    }, [userLoginData]);

    return (
        <>    
            <UserInformationBox title={"Login"} 
                fields={["Email", "Password"]} setUserData={setUserLoginData}/>
        </>
    );
}

export default LoginPage;