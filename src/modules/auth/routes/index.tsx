import { Route } from 'react-router-dom';
import PublicRoute from 'modules/shared/routes/PublicRoute';
import Login from '../views/Login';
import Register from '../views/Register';

export const useAuthRoutes = () => {
  return (
    <>
      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />

      <Route
        path="/register"
        element={
          <PublicRoute>
            <Register />
          </PublicRoute>
        }
      />
    </>
  );
};
