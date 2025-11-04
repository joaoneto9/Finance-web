import { useEffect, useState } from "react";
import UserInformationBox from "../components/UserInformationBox";

function LoginPage() {

    const [userLoginData, setUserLoginData] = useState<Map<String, any> | null>(null);


    // realiza o login quando o userLoginData for alterado
    useEffect(() => {
        console.log(userLoginData);
    }, [userLoginData]);

    return (
        <>    
            <UserInformationBox title={"Login"} 
                fields={["Email", "Password"]} setUserLogin={setUserLoginData}/>
        </>
    );
}

export default LoginPage;