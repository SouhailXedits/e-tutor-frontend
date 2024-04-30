import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useAuthRoutes } from "modules/auth/routes";
import { useHomeRoutes } from "modules/home/routes";
import NotFound from "../pages/NotFound";
import useAuthStore from "../store/useAuthStore";

const authRoutes = useAuthRoutes();
const homeRoutes = useHomeRoutes();
function Router() {
  const { isAuthenticated } = useAuthStore();
  console.log(isAuthenticated);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />

        {authRoutes}
        {homeRoutes}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
