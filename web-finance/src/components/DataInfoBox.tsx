import "../style/DataInfoBox.css"

interface props {
    title: string;
    contentData: Map<string, number>;
}

function DataInfoBox({title, contentData}:props) {
    return (
        <>
            <div className="content-data-box">
                <h4 className="box-title">
                    {title}
                </h4>
            </div>
        </>
    )

}

export default DataInfoBox;