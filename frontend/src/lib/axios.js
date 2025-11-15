import axios from "axios";

export const axiosInstance =axios.create({
    baseURL: "chat-application-backend-phi-gilt.vercel.app",
    withCredentials: true,
});
