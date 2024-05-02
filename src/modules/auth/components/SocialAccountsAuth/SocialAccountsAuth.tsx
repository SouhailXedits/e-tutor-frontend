// import { useGoogleLoginMutation } from "modules/auth/data/queries/auth.query";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { GoogleLogin } from "@react-oauth/google";
import { useGoogleLoginMutation } from "modules/auth/data/queries/auth.query";

function SocialAccountsAuth() {
  const { mutateAsync: googleSignIn } = useGoogleLoginMutation();
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
