import { API_ENDPOINT } from "config";
import { fetchData, postData } from "lib/utils";
import { type ConfirmEmailBody, type LoginBody } from "modules/auth/types/auth";
import { GoogleAuth } from "google-auth-library";

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
  console.log("🚀 ~ confirmEmail ~ res:", res);
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

// Initialize the Google Auth client

// Sign in the user
// export const googleSignIn = async () => {
//   const auth = new GoogleAuth();
//    try {
//      // Get the client instance
//      const client = await auth.getClient();

//      // Retrieve the access token
//      const tokenResponse = await client.getAccessToken();
//      const accessToken = tokenResponse.token;

//      // Send accessToken to your backend
//      fetch("/auth", {
//        method: "POST",
//        headers: {
//          "Content-Type": "application/json",
//        },
//        body: JSON.stringify({ accessToken }),
//      });
//    } catch (error) {
//      console.error("Error signing in:", error);
//    }
// };
