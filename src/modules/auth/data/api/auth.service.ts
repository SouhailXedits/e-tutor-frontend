import { type ConfirmEmailBody, type LoginBody } from "modules/auth/types/auth";
import getData from "modules/shared/api/axiosHelpers/getData";
import postData from "modules/shared/api/axiosHelpers/postData";

export const register = async (body: LoginBody) => {
  await postData("/auth/email/register", body);
};

export const confirmEmail = async (body: ConfirmEmailBody) => {
  await postData(`/auth/email/confirm`, body);
};

export const getMe = async () => {
  const me = await getData({
    path: "auth/me",
  });
  if (!me) throw new Error("User not found");
  return me;
};

export const emailLogin = async (body: LoginBody) => {
  const me = await postData("/auth/email/login", {
    email: body.email,
    password: body.password,
  });
  return me;
};

export const googleLogin = async (tokenID: string) => {
  const me = await postData("/auth/google/login", {
    idToken: tokenID,
  });
  return me;
};

export const logout = async () => {
  await postData(`/auth/logout`, {});
};
