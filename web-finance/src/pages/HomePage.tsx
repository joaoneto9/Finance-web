import "../style/HomePage.css"

interface props {
    name: string | null;
}

function HomePage({name}: props) {

    const map = new Map();
    map.set("Gasto Mensal", 100);

    return (
        <>
            <div className="introduction-box">
                <h3 className="introduction-title">Olá, {name}!</h3>
            </div>
        </>
    );
}

export default HomePage;