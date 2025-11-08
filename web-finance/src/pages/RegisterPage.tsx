import { useEffect, useState } from "react";
import UserInformationBox from "../components/UserInformationBox";
import registerPost from "../requests/registerUserPost";

function RegisterPage() {

    const [userRegister, setUserRegister] = useState<Map<String, any> | null>(null);

    useEffect(() => {
        if (!userRegister) return;

        const password = userRegister.get('password');
        const confirmPassword = userRegister.get('confirm password')

        if (password != confirmPassword) {
            alert("erro, confirme a senha digitada anteriomente");
            return;
        }

        const data = {
            username: userRegister.get('username'),
            email: userRegister.get('email'),
            password: password
        }

        const registerUser = async () => {
            const registered = await registerPost(data);

            if (!registered) {
                alert("erro ao registrar usuario, tente novamente");
                return;
            }

            window.location.href = 'http://localhost:5173/Login';
        }

        registerUser();
    }, [userRegister]);

    return (
        <>  
            <UserInformationBox title={"Register"} 
                fields={["username", "Email", "Password", "Confirm Password"]}
                setUserData={setUserRegister}/>
        </>
    );
}

export default RegisterPage;