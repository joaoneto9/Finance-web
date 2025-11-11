import { useEffect, useState } from "react";
import getAllUserExpenses from "../requests/getAllUserExpenses";

function ExpensesDashboard() {

    const [data, setData] = useState<Object[]>([]);
    
    useEffect(() => {
        const getData = async () => {

            const newData = await getAllUserExpenses(); 
            console.log(newData)
            setData(newData);
        };

        getData();
    }, [])


    return (
        <>
            <div>
                <p>{data.map(element => {
                    return (
                        <>
                            <p>{element.amount}</p>
                        </>
                    )
                })}</p>
            </div>
        </>
    );
}

export default ExpensesDashboard;