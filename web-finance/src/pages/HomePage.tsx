import "../style/HomePage.css"
import ExpensesTable from "../components/ExpensesTable";

interface props {
    name: string | null;
}

function HomePage({name}: props) {

    return (
        <>
            <div className="introduction-box">
                <h3 className="introduction-title">Olá, {name}!</h3>
                <ExpensesTable />
            </div>
        </>
    );
}

export default HomePage;