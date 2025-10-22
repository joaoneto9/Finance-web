import type { ReactNode } from "react"

interface props {
    fields: string[]
}

function UserInformationBox({fields}: props) {

    const fieldsHtml = (): ReactNode  => {
        return fields.map((field, index) => (
            <p className={"field-" + index}>{field}</p>
        ))
    }

    return (
        <>
            <div className="fields-container">
                {fieldsHtml()}
            </div>
        
        </>
    )

}

export default UserInformationBox;