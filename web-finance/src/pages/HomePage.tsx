import Header from "../components/Header";
import "../style/HomePage.css"

interface props {
    name: string;
}

function HomePage({name}: props) {


    return (
        <>
            <Header></Header>
            <div className="introduction-box">
                <h3 className="introduction-title">Olá, {name}!</h3>
            </div>
        </>
    );
}

export default HomePage;