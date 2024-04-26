import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import axios, { AxiosResponse } from "axios";

export async function fetchData<T>(route: string, params?: any): Promise<T> {
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

export async function postData<T>(route: string, data: any): Promise<T> {
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
