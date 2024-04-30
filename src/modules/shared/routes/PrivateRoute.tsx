import { useEffect, type ReactElement } from "react";
import { Navigate } from "react-router";
import useAuthStore from "modules/shared/store/useAuthStore";
import { useQuery } from "@tanstack/react-query";
import { getMe } from "modules/auth/data/api/auth.service";

interface Props {
  children: ReactElement;
}

const PrivateRoute: React.FC<Props> = ({ children }) => {
  const { isAuthenticated, setIsAuthenticated } = useAuthStore(
    (state) => state
  );

  const { data, isSuccess, isPending } = useQuery({
    queryKey: ["user"],
    queryFn: getMe,
    retry: false,
  });
  useEffect(() => {
    if (isSuccess) {
      setIsAuthenticated(true);
    } else {
      if (!isPending && !data) {
        setIsAuthenticated(false);
      }
    }
  }, [isSuccess, isAuthenticated, setIsAuthenticated, data, isPending]);
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return children;
};

export default PrivateRoute;
