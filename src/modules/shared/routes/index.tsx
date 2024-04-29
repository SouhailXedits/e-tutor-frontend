import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { useAuthRoutes } from "modules/auth/routes";
import { useHomeRoutes } from "modules/home/routes";
import SideBar from "../components/SideBar";
import NotFound from "../pages/NotFound";
import useAuthStore from "../store/useAuthStore";

const Router = () => {
  const authRoutes = useAuthRoutes();
  const homeRoutes = useHomeRoutes();
  const { isAuthenticated } = useAuthStore((state) => state);
  console.log("🚀 ~ Router ~ isAuthenticated:", isAuthenticated);
  const pathname = useLocation().pathname;

  return (
    <BrowserRouter>
      <div className=" flex flex-row h-screen w-screen">
        {isAuthenticated && pathname !== "/" && <SideBar />}
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          {authRoutes}
          {homeRoutes}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Router;
