import { useMutation, useQueryClient } from "@tanstack/react-query";
import { payCourses } from "../api/payement.service";
import { IPayementBody } from "modules/home/types/payement";
import { toast } from "react-toastify";
import { IUpdateStudentProfile } from "modules/home/types/user";
import { updateStudentProfile } from "../api/users.service";

export const useUpdateStudentProfileMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["update-student-profile"],
    mutationFn: async ({
      id,
      body,
    }: {
      id: number;
      body: IUpdateStudentProfile;
    }) => {
      const res = await updateStudentProfile(id, body);
      return res;
    },
    onError: (err: any) => {
      const errMessage = err?.response?.data?.message || "Something went wrong";
      toast.error(errMessage);
    },
    onSuccess: () => {

      queryClient.invalidateQueries({
        queryKey: ["user"],
      });

      toast.success("Profile updated successfully!");
    },
  });

}
