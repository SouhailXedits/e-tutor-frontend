import { useMutation } from "@tanstack/react-query";
import {
  registerBody,
  type LoginBody,
  ConfirmEmailBody,
} from "modules/auth/types/auth";
import { confirmEmail, register } from "../api/auth.service";

export const useRegisterQuery = () =>
  useMutation(["register"], async (body: registerBody) => {
    const res = await register(body);
    return res;
  });
export const useConfirmEmailQuery = () =>
  useMutation(["confirm-email"], async (body: ConfirmEmailBody) => {
    const res = await confirmEmail(body);
    return res;
  });
