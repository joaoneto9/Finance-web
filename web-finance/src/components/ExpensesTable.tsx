import { useEffect, useState } from "react";
import getAllUserExpenses from "../requests/getAllUserExpenses";

interface Expenses {
    id: number
    amount: string
    payment_date: string
    payment_description: string
    register_date: string
    type_of_payment: string
}

function ExpensesDashboard() {

    const [data, setData] = useState<Expenses[]>([]);
    
    useEffect(() => {
        const getData = async () => {

            const newData = await getAllUserExpenses(); 
            setData(newData);
        };

        getData();
    }, [])

    return (
        <>
            <table border={1} style={{ borderCollapse: "collapse", width: "90vw", margin: "20px" }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Payment Date</th>
                        <th>Payement Description</th>
                        <th>Amount</th>
                        <th>Type Of Payment</th>
                        <th>Register Date</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(expense => {
                        return (
                            <tr key={expense.id}>
                                <td>{expense.id}</td>
                                <td>{expense.payment_date}</td>
                                <td>{expense.payment_description}</td>
                                <td>{expense.amount}</td>
                                <td>{expense.type_of_payment}</td>
                                <td>{expense.register_date}</td>
                            </tr>
                        )}
                    )}
                </tbody>
            </table>
        </>
    );
}

export default ExpensesDashboard;