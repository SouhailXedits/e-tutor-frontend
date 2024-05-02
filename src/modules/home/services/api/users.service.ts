import { API_ENDPOINT } from "config";
import { IUpdateStudentProfile } from "modules/home/types/user";
import patchData from "modules/shared/api/axiosHelpers/updateData";

export const updateStudentProfile = async (id: number, body: IUpdateStudentProfile) => {
  const res = patchData(`${API_ENDPOINT}/users/${id}`, body);
  return res;
};
