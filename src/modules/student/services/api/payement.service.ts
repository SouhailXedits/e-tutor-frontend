import { API_ENDPOINT } from "config";
import { postData } from "lib/utils";
import { IConfirmPayementBody, IPayementBody } from "../../types/payement";

export const payCourses = async (body: IPayementBody) => {
  const res = postData(`${API_ENDPOINT}/purshase`, body);
  return res;
};


export const confirmPayement = async (body: IConfirmPayementBody) => {
  console.log(body)
  const res = postData(`${API_ENDPOINT}/purshase/confirm`, body);
  return res;
};