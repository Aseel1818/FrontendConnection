import apiDispatcher from '../Dispatcher/apiDispatcher';  // Changed from Dispatcher to apiDispatcher

const apiStore = {
    user: null,
    async register(user, setMessage) {
        try {
            const result = await apiDispatcher.dispatch({ type: "REGISTER", payload: user });
            setMessage(result.message || "Register success");
        } catch (error) {
            setMessage(error.message || "Registration failed");
        }
    },
    async login(user, setMessage) {
        try {
            const result = await apiDispatcher.dispatch({ type: "LOGIN", payload: user });
            setMessage(result.message || "Login success");
        } catch (error) {
            setMessage(error.message || "Login failed");
        }
    }
};

export default apiStore;