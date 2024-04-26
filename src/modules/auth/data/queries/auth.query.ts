import { useMutation } from "@tanstack/react-query";
import { registerBody, ConfirmEmailBody } from "modules/auth/types/auth";
import { confirmEmail, register } from "../api/auth.service";

export const useRegisterQuery = () =>
  useMutation({
    mutationKey: ["register"],
    mutationFn: async (body: registerBody) => {
      const res = await register(body);
      return res;
    },
  });
export const useConfirmEmailQuery = () =>
  useMutation({
    mutationKey: ["confirm-email"],
    mutationFn: async (body: ConfirmEmailBody) => {
      const res = await confirmEmail(body);
      return res;
    },
  });
