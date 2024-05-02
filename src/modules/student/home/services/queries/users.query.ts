import { toast } from "react-toastify";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { type IUpdateStudentProfile } from "../../types/user";
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
      toast.success("Profile updated successfully!");
    },
    onSettled: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["user"],
      });
    },
  });
};
