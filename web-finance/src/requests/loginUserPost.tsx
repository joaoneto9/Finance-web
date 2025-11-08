interface loginBody {
    email: String;
    password: String
}

const loginPost = async ({email, password}: loginBody) => {
    const response = await fetch("http://localhost:5000/user/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: email, 
            password: password
        })
    })


    if (!response.ok) {
        console.log("erro na requisição");
        return;
    }

    const result = await response.json();
    
    return result
}

export default loginPost;