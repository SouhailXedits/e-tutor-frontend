import { useEffect, type ReactElement } from "react";
import { Navigate } from "react-router";
import useAuthStore from "modules/shared/store/useAuthStore";
import { useQuery } from "@tanstack/react-query";
import { getMe } from "modules/auth/data/api/auth.service";

interface Props {
  children: ReactElement;
}

const PublicRoute: React.FC<Props> = ({ children }) => {
  const { isAuthenticated, setIsAuthenticated } = useAuthStore(
    (state) => state,
  );
  const { data, isSuccess } = useQuery({
    queryKey: ["user"],
    queryFn: getMe,
  });
  useEffect(() => {
    if (isSuccess) {
      console.log(data);
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [isSuccess, isAuthenticated, setIsAuthenticated, data]);

  return isAuthenticated ? <Navigate to="/home" /> : children;
};

export default PublicRoute;
