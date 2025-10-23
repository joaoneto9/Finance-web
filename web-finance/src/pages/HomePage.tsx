import Header from "../components/Header";
import DataInfoBox from "../components/DataInfoBox";
import "../style/HomePage.css"

interface props {
    name: string;
}

function HomePage({name}: props) {

    const map = new Map();
    map.set("Gasto Mensal", 100);

    return (
        <>
            <div className="introduction-box">
                <h3 className="introduction-title">Olá, {name}!</h3>
            </div>
            <DataInfoBox title={"Gasto Mensal"} contentData={map}></DataInfoBox>
        </>
    );
}

export default HomePage;