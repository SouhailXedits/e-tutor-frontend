import { API_ENDPOINT } from "config";
import { fetchData, postData } from "lib/utils";
import { ConfirmEmailBody, type LoginBody } from "modules/auth/types/auth";

export const register = async (body: LoginBody) => {
  console.log(API_ENDPOINT);
  const res = await fetch(`${API_ENDPOINT}/auth/email/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  console.log(res.ok);
  console.log(res.json());
  if (!res.ok) {
    console.log(res);
    throw new Error("Invalid Credential");
  }
};

export const confirmEmail = async (body: ConfirmEmailBody) => {
  const res = postData(`${API_ENDPOINT}/auth/email/confirm`, body);
  console.log(API_ENDPOINT);
  console.log(body);

};

export const getMe = async () => {
  const me = await fetchData(API_ENDPOINT + "/auth/me");
  return me
};
