import { API_ENDPOINT } from "config";
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
  console.log(API_ENDPOINT);
  console.log(body);
  const res = await fetch(`${API_ENDPOINT}/auth/email/confirm`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    console.log(res);
    throw new Error("Invalid Credential");
  }

  return res.json();
};
