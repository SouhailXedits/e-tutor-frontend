import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import { IConfirmPayementBody, type IPayementBody } from "../../types/payement";
import { confirmPayement, payCourses } from "../api/payement.service";
import { useNavigate } from "react-router";

export const usePayementMutation = () =>
  useMutation({
    mutationKey: ["payement"],
    mutationFn: async (body: IPayementBody) => {
      const res = await payCourses(body);
      return res;
    },
    onError: (err: any) => {
      console.log(err);
      const errMessage = err?.response?.data?.message || "Something went wrong";
      toast.error(errMessage);
    },
    onSuccess: () => {
      console.log("success");
    },
  });
export const useConfirmPayementMutation = () =>{
  const navigate = useNavigate();
  return useMutation({
    mutationKey: ["confirm-payement"],
    mutationFn: async (body: IConfirmPayementBody) => {
      const res = await confirmPayement(body);
      return res;
    },
    onError: (err: any) => {
      console.log(err);
      const errMessage = err?.response?.data?.message || "Something went wrong";
      toast.error(errMessage);
    },
    onSuccess: () => {
      console.log("success");
      toast.success("Purshase confirmed successfully!");
      navigate("/home");
    },
  });}
