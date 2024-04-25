import { type ReactElement } from 'react';
import { Navigate } from 'react-router';
import useAuthStore from 'modules/shared/store/useAuthStore';

interface Props {
  children: ReactElement;
}

const PrivateRoute: React.FC<Props> = ({ children }) => {
  const { isAuthenticated } = useAuthStore((state) => state);
  console.log(isAuthenticated)

  return isAuthenticated ? children : <Navigate to="/" />;
};

export default PrivateRoute;
