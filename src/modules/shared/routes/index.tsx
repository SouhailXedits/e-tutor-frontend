import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import { useAuthRoutes } from "modules/auth/routes";
import { useHomeRoutes } from "modules/home/routes";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import NotFound from "../pages/NotFound";
import useAuthStore from "../store/useAuthStore";

const Router = () => {
  const authRoutes = useAuthRoutes();
  const homeRoutes = useHomeRoutes();
  const { isAuthenticated } = useAuthStore();
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <div className="flex flex-row h-screen w-screen">
                <SideBar />
                <div className="flex flex-col gap-2 w-full h-full">
                  <TopBar />
                  <Outlet />
                </div>
              </div>
            ) : (
              <Navigate to="/login" />
            )
          }
        >
          {homeRoutes}
        </Route>
        {authRoutes}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
