import { API_ENDPOINT } from "config";
import patchData from "modules/shared/api/axiosHelpers/updateData";
import { IUpdateStudentProfile } from "../../types/user";

export const updateStudentProfile = async (
  id: number,
  body: IUpdateStudentProfile
) => {
  const res = patchData(`${API_ENDPOINT}/users/${id}`, body);
  return res;
};
