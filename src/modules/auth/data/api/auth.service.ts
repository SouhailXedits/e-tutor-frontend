import { API_ENDPOINT } from "config";
import { fetchData, postData } from "lib/utils";
import { type ConfirmEmailBody, type LoginBody } from "modules/auth/types/auth";
import { GoogleAuth } from "google-auth-library";

export const register = async (body: LoginBody) => {
  const res = await fetch(`${API_ENDPOINT}/auth/email/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    throw new Error("Invalid Credential");
  }
};

export const confirmEmail = async (body: ConfirmEmailBody) => {
  const res = postData(`${API_ENDPOINT}/auth/email/confirm`, body);
};

export const getMe = async () => {
  const me = await fetchData(API_ENDPOINT + "/auth/me");
  return me;
};

export const emailLogin = async (body: LoginBody) => {
  const me = await postData(API_ENDPOINT + "/auth/email/login", {
    email: body.email,
    password: body.password,
  });
  return me;
};

export const googleLogin = async (tokenID: string) => {
  const me = await postData(API_ENDPOINT + "/auth/google/login", {
    idToken: tokenID,
  });
  return me;
}

export const logout = async () => {
  const res = await postData(`${API_ENDPOINT}/auth/logout`, {});
};