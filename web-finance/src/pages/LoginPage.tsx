import Header from "../components/Header";
import UserInformationBox from "../components/UserInformationBox";

function LoginPage() {

    return (
        <>    
            <UserInformationBox title={"Login"} 
                fields={["Email", "Password"]}/>
        </>
    );
}

export default LoginPage;