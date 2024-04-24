import { type ReactElement } from 'react';
import { Navigate } from 'react-router';
import useAuthStore from 'modules/shared/store/useAuthStore';

interface Props {
  children: ReactElement;
}

const PublicRoute: React.FC<Props> = ({ children }) => {
  const { isAuthenticated } = useAuthStore((state) => state);

  return isAuthenticated ? <Navigate to="/home" /> : children;
};

export default PublicRoute;
