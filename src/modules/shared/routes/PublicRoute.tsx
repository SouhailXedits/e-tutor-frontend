import { useEffect, type ReactElement } from "react";
import { Navigate } from "react-router";
import useAuthStore from "modules/shared/store/useAuthStore";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getMe } from "modules/auth/data/api/auth.service";

interface Props {
  children: ReactElement;
}

const PublicRoute: React.FC<Props> = ({ children }) => {
  const { isAuthenticated, setIsAuthenticated } = useAuthStore(
    (state) => state
  );
  const { data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getMe,
    onSuccess: (data) => {
      setIsAuthenticated(true);
    },
    onError: () => {
      setIsAuthenticated(false);
    },
  });

  return isAuthenticated ? <Navigate to="/home" /> : children;
};

export default PublicRoute;
