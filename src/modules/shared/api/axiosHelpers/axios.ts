import { toast } from "react-toastify";
import { type AxiosError, type AxiosRequestConfig } from "axios";
import api from "../axios.config";

export default async function sendAxiosRequest<T>(
  options: AxiosRequestConfig
): Promise<{ data: T | null; errors: Record<string, string> | null }> {
  return await api
    .request(options)
    .then((response) => {
      return { data: response.data, errors: null };
    })
    .catch((error: AxiosError) => {
      console.error(error);
      const errors = (
        error.response?.data as { errors: Record<string, string> }
      ).errors;
      // toast.error(error.message !== "canceled" && error.message);
      return { data: null, errors };
    });
}
