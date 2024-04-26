import axios, { AxiosInstance } from "axios";
const api: AxiosInstance = axios.create({
  baseURL: process.env.API_URL,
  timeout: 0,
  responseType: "json",
  headers: {
    accept: "application/json",
    "content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  withCredentials: true,
});
export default api;
