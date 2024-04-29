import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { useAuthRoutes } from "modules/auth/routes";
import { useHomeRoutes } from "modules/home/routes";
import SideBar from "../components/SideBar";
import NotFound from "../pages/NotFound";
import useAuthStore from "../store/useAuthStore";

const Router = () => {
  const authRoutes = useAuthRoutes();
  const homeRoutes = useHomeRoutes();
  const { isAuthenticated } = useAuthStore((state) => state);

  return (
    <BrowserRouter>
      <Routes>
        {isAuthenticated ? (
          <Route
            path="/"
            element={
              <div className="flex flex-row h-screen w-screen">
                <SideBar />
                <Outlet />
              </div>
            }
          >
            {homeRoutes}
          </Route>
        ) : (
          <Route path="/" element={<Outlet />}>
            {authRoutes}
          </Route>
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
