import { toast } from "react-toastify";
import { type AxiosError, type AxiosRequestConfig } from "axios";
import api from "../axios.config";

export default async function sendAxiosRequest<T>(
  options: AxiosRequestConfig
): Promise<T | null> {
  return await api
    .request(options)
    .then((response) => {
      console.log("🚀 ~ .then ~ response:", response.data);
      return response.data;
    })
    .catch((error: AxiosError) => {
      console.error(error);
      toast.error(
        error.response?.status ??
          (error.message !== "canceled" && error.message)
      );
      return null;
    });
}
