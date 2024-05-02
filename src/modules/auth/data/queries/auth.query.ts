import { useMutation, useQuery } from "@tanstack/react-query";
import { registerBody, ConfirmEmailBody, LoginBody } from "modules/auth/types/auth";
import { confirmEmail, emailLogin, getMe, googleLogin, logout, register } from "../api/auth.service";
import { toast } from "react-toastify";

export const useRegisterMutation = () =>
  useMutation({
    mutationKey: ["register"],
    mutationFn: async (body: registerBody) => {
      const res = await register(body);
      return res;
    },
  });
export const useConfirmEmailMutaion = () =>
  useMutation({
    mutationKey: ["confirm-email"],
    mutationFn: async (body: ConfirmEmailBody) => {
      const res = await confirmEmail(body);
      return res;
    },
  });

export const useGetMeQuery = () =>
  useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await getMe();
      return res;
    },
  })

export const useLoginMutation = () =>
  useMutation({
    mutationKey: ["login"],
    mutationFn: async (body: LoginBody) => {
      const res = await emailLogin(body);
      return res;
    },
  });

export const useGoogleLoginMutation = () =>
  useMutation({
    mutationKey: ["google-login"],
    mutationFn: async (tokenID: string) => {
      const res = await googleLogin(tokenID);
      return res;
    },
  });


export const useLogoutMutation = () =>
  useMutation({
    mutationKey: ["logout"],
    mutationFn: async () => {
      const res = await logout();
      return res;
    },
    onSuccess: () => {
      window.location.href = "/";
    },
    onError: (err: any) => {
      const errMessage = err?.response?.data?.message || "Something went wrong";
      toast.error(errMessage);
    },
  })