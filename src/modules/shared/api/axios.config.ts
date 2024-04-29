import axios, { AxiosInstance } from "axios";
import { API_ENDPOINT } from "config";
const api: AxiosInstance = axios.create({
  baseURL: API_ENDPOINT,
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
