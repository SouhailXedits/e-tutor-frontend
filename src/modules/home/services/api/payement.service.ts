import { API_ENDPOINT } from "config";
import { postData } from "lib/utils";
import { IPayementBody } from "modules/home/types/payement";

export const payCourses = async (body: IPayementBody) => {
  const res = postData(`${API_ENDPOINT}/purshase`, body);
  return res
};
