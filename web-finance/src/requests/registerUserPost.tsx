interface registerBody {
    username: String,
    email: String, 
    password: String
}

async function registerPost({username, email, password}: registerBody) {
    const repsonse = await fetch("http://localhost:5000/user", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: username,
            email: email,
            password: password
        })
    }); 

    return repsonse.ok;
}

export default registerPost;