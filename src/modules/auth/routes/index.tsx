import { Route } from 'react-router-dom';
import PublicRoute from 'modules/shared/routes/PublicRoute';
import Login from '../views/Login';
import Register from '../views/Register';
import ConfirmationEmail from "../views/Confirm/ConfirmEmail";
import ConfirmationPage from '../views/Confirm-email/ConfirmPage';

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

      <Route
        path="/confirm"
        element={
          <PublicRoute>
            <ConfirmationPage />
          </PublicRoute>
        }
      />
      <Route
        path="/confirm-email"
        element={
          <PublicRoute>
            <ConfirmationEmail />
          </PublicRoute>
        }
      />
    </>
  );
};
