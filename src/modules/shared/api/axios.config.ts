import axios from "axios";
const api = axios.create({
  baseURL: process.env.API_URL,
  timeout: 0,
  headers: {
    accept: "application/json",
    "content-type": "application/json",
  },
  withCredentials: true,
});
export default api;
