import type { ReactNode } from "react"
import "../style/UserInformationBox.css"

interface props {
    title: string;
    fields: string[]
}

function UserInformationBox({title, fields}: props) {

    const fieldsHtml = (): ReactNode  => {
        return fields.map(field => (
            <div className="field-container">
                <p className="field-name">{field}</p>
                <input type="text" name={"input-field-" + field} id="input-field"/>
            </div>
        ))
    }

    return (
        <>  
            <div className="user-information-container">
                <div className="fields-container">
                    <h3 className="user-informations-box-title">{title}</h3>
                    {fieldsHtml()}
                    <button className="submit-button">Submit</button>
                </div>
            </div>
        </>
    )

}

export default UserInformationBox;