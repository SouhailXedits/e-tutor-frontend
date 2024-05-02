import { type ReactElement } from "react";
import { Navigate } from "react-router";
import { useGetMe } from "../queries/useGetMe";

interface Props {
  children: ReactElement;
}

const PublicRoute: React.FC<Props> = ({ children }) => {
  const { data } = useGetMe();
  return data ? <Navigate to="/home" /> : children;
};

export default PublicRoute;
