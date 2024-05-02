import { AxiosError, AxiosRequestConfig } from "axios";
import api from "../axios.config";
import { toast } from "react-toastify";

export default async function sendAxiosRequest<T>(
  options: AxiosRequestConfig
): Promise<T | null> {
  return await api
    .request(options)
    .then((response) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      console.error(error);
      toast.error(
        error.response?.status ||
          (error.message !== "canceled" && error.message)
      );
      return null;
    });
}
