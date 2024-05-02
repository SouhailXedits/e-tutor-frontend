import { type ReactElement } from "react";
import { Navigate } from "react-router";
import { useGetMe } from "../querys/useGetMe";

interface Props {
  children: ReactElement;
}

const PrivateRoute: React.FC<Props> = ({ children }) => {
  const { data } = useGetMe();
  return !data ? <Navigate to="/login" /> : children;
};

export default PrivateRoute;
