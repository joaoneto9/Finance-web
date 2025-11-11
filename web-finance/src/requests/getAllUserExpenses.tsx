async function getAllUserExpenses() {
    const response = await fetch("http://localhost:5000/expense", {
        method: "GET",
        headers: {
            "Authorization": "Bearer " + sessionStorage.getItem('token')
        }
    })

    if (!response.ok) {
        console.log("erro nessa porra");
        return;
    }

    const result = await response.json();
    
    return result;
}


export default getAllUserExpenses;