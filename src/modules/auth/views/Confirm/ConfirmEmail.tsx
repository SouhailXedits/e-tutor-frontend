import { useConfirmEmailQuery } from "modules/auth/data/queries/auth.query";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Cookies from "js-cookie";
import { useQueryClient } from "@tanstack/react-query";
// import useAuthStore from "modules/shared/store/useAuthStore";

const ConfirmationEmail = () => {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient()
  // const { setIsAuthenticated } = useAuthStore((state) => state);
  const navigate = useNavigate();

  const hash = searchParams.get("hash");
  const { mutateAsync: confirm } = useConfirmEmailQuery();
  useEffect(() => {
    const confirmEmail = async () => {
      const res = await confirm({ hash: hash || "" });
      // if(!res.user) return;
      // // Cookies.set("refresh_token", res.refreshToken);
      // // Cookies.set("access_token", res.token);
      // queryClient.setQueryData(['user'], res.user)
      // setIsAuthenticated(true);
      navigate("/home");
    };
    confirmEmail();
  }, []);

  return (
    <div className="">
    </div>
  );
};

export default ConfirmationEmail;
