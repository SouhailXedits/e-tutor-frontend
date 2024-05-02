import { useMutation } from "@tanstack/react-query";
import { payCourses } from "../api/payement.service";
import { IPayementBody } from "modules/home/types/payement";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

export const usePayementMutation = () =>
  useMutation({
    mutationKey: ["payement"],
    mutationFn: async (body: IPayementBody) => {
      const res = await payCourses(body);
      return res;
    },
    onError: (err: any) => {
      const errMessage = err?.response?.data?.message || "Something went wrong";
      toast.error(errMessage);
    },
    onSuccess: () => {
      toast.success("Purshase done successfully!");
    },
  });
