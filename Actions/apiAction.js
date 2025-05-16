const apiAction = {
    register(user) {
        return fetch("http://localhost:8000/api/register", {
            method: "POST",
            headers: { 
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(async response => {
            const data = await response.json();
            if (!response.ok) throw new Error(data.message || "Register failed");
            return data;
        });
    },
    login(user) {  // Changed from duplicate register to login
        return fetch("http://localhost:8000/api/login", {
            method: "POST",
            headers: { 
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(async response => {
            const data = await response.json();
            if (!response.ok) throw new Error(data.message || "Login failed");
            return data;
        });
    }
}

export default apiAction;