import { AxiosRequestConfig } from "axios";
import api from "../axios.config";
import { toast } from "react-toastify";

export default async function sendAxiosRequest<T>(
  options: AxiosRequestConfig
): Promise<T | null> {
  return await api
    .request(options)
    .then((response) => {
      console.log("🚀 ~ .then ~ response:", response);
      return response.data;
    })
    .catch((error) => {
      console.error(error);
      toast.error(
        error.response?.data?.status_message ||
          (error.message !== "canceled" && error.message)
      );
      return null;
    });
}
