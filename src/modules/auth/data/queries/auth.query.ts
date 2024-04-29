import { useMutation, useQuery } from "@tanstack/react-query";
import { registerBody, ConfirmEmailBody, LoginBody } from "modules/auth/types/auth";
import { confirmEmail, emailLogin, getMe, register } from "../api/auth.service";

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
