import { type ReactNode } from "react"
import "../style/UserInformationBox.css"


interface props {
    title: string;
    fields: string[];
    setUserData: React.Dispatch<React.SetStateAction<Map<String, any> | null>>;
}

function UserInformationBox({title, fields, setUserData}: props) {


    const sendUsersInformations = () => {
        const inputs = document.querySelectorAll<HTMLInputElement>(".input-field");
        const userData: Map<String, any> = new Map<String, any>();

        inputs.forEach(input => {
            userData.set(input.name, input.value);
        });

        setUserData(userData);
    } 

    const fieldsHtml = (): ReactNode  => {
        return fields.map(field => (
            <div className="field-container">
                <p className="field-name">{field}</p>
                <input type="text" name={field.toLowerCase()} className="input-field"/>
            </div>
        ))
    }

    return (
        <>  
            <div className="user-information-container">
                <div className="fields-container">
                    <h3 className="user-informations-box-title">{title}</h3>
                    {fieldsHtml()}
                    <button className="submit-button" onClick={sendUsersInformations}>Submit</button>
                </div>
            </div>
        </>
    )

}

export default UserInformationBox;