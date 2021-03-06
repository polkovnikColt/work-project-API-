import axios from "axios";

export const login = async (userData) => {
    const res = await axios.post('/login',userData);
    const token = await res.data.token;
    localStorage.setItem("token",token);
    return token;
}