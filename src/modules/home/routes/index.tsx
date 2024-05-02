import { Route } from "react-router-dom";
import PrivateRoute from "modules/shared/routes/PrivateRoute";
import Home from "../views/Home";
import Purshases from "../views/Purshases";
import PaymentGateway from "../components/purshase/PayementGateway";

export const useHomeRoutes = () => {
  return (
    <>
      <Route
        path="/home"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route
        path="/purshases"
        element={
          <PrivateRoute>
            <PaymentGateway>
              <Purshases />
            </PaymentGateway>
          </PrivateRoute>
        }
      />
    </>
  );
};
