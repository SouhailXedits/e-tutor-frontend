import { useConfirmEmailMutaion } from "modules/auth/data/queries/auth.query";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

const ConfirmationEmail = () => {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient()
  const navigate = useNavigate();

  const hash = searchParams.get("hash");
  const { mutateAsync: confirm } = useConfirmEmailMutaion();
  useEffect(() => {
    const confirmEmail = async () => {
      await confirm({ hash: hash || "" });
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
