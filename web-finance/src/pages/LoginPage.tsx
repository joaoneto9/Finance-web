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
        
        loginPost(data);
    }, [userLoginData]);

    return (
        <>    
            <UserInformationBox title={"Login"} 
                fields={["Email", "Password"]} setUserLogin={setUserLoginData}/>
        </>
    );
}

export default LoginPage;