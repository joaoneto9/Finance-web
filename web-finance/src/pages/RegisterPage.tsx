import UserInformationBox from "../components/UserInformationBox";

function RegisterPage() {

    return (
        <>  
            <UserInformationBox title={"Register"} 
                fields={["username", "Email", "Password", "Confirm Password"]}/>
        </>
    );
}

export default RegisterPage;