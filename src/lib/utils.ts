import axios, { type AxiosResponse } from "axios";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export async function fetchData<T>(route: string, params?: object): Promise<T> {
  try {
    const response: AxiosResponse<T> = await axios.get(route, {
      params,
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export async function postData<T>(route: string, data: object): Promise<T> {
  try {
    const response: AxiosResponse<T> = await axios.post(route, data, {
      withCredentials: true,
    });
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
    console.error("Error posting data:", error);
    throw error;
  }
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
