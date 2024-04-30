// import { useGoogleLoginMutation } from "modules/auth/data/queries/auth.query";
import Button from "modules/shared/components/Button";
import { FcGoogle as GoogleIcon } from "react-icons/fc";
import { GoogleLogin } from "@react-oauth/google";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useGoogleLoginMutation } from "modules/auth/data/queries/auth.query";
import { useNavigate } from "react-router";

function SocialAccountsAuth() {
  const {
    mutateAsync: googleSignIn,
    isPending,
    isError,
    error,
  } = useGoogleLoginMutation();
  const navigate = useNavigate();

  return (
    <div className=" w-full">
      <GoogleLogin
        onSuccess={async (credentialResponse) => {
          const token = credentialResponse.credential || "";
          const user = await googleSignIn(token);
          if (user) navigate("/home");
        }}
        useOneTap={true}
        size="large"
        auto_select={true}
        onError={() => {
          toast.error("Couldn't log in with Google");
        }}
      />{" "}
    </div>
  );
}

export default SocialAccountsAuth;
