import { type ReactElement, useEffect } from "react";
import { Navigate } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { getMe } from "modules/auth/data/api/auth.service";
import useAuthStore from "modules/shared/store/useAuthStore";

interface Props {
  children: ReactElement;
}

const PrivateRoute: React.FC<Props> = ({ children }) => {
  const { isAuthenticated, setIsAuthenticated } = useAuthStore(
    (state) => state
  );

  const { data, isSuccess } = useQuery({
    queryKey: ["user"],
    queryFn: getMe,
  });
  useEffect(() => {
    if (isSuccess) {
      console.log(data)
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [isSuccess, isAuthenticated, setIsAuthenticated, data]);
  return isAuthenticated ? children : <Navigate to="/" />;
};

export default PrivateRoute;
