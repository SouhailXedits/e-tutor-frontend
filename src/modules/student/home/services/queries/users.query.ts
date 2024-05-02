import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { updateStudentProfile } from "../api/users.service";
import { IUpdateStudentProfile } from "../../types/user";

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
};
