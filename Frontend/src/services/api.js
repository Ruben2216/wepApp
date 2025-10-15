import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:4000",
    headers: {
        "Content-Type": "application/json",
    },
});

export const saveEstudiante = async (payload) => {
    const { data } = await api.post("/api/save", payload);
    return data;
};

export default api;
