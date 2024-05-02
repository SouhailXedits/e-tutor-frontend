import { Outlet, Route } from "react-router-dom";
import CreateCourse from "modules/instructor/views/create-course";
import Earnings from "modules/instructor/views/earnings";
import Messages from "modules/instructor/views/messages";
import MyCourses from "modules/instructor/views/my-courses";
import Settings from "modules/instructor/views/settings";
import SideBar from "modules/shared/components/SideBar";
import TopBar from "modules/shared/components/TopBar";
import PrivateRoute from "modules/shared/routes/PrivateRoute";
import Dashboard from "../views/dahsboard/Dashboard";

export const useHomeRoutes = () => {
  console.log("🚀 ~ useHomeRoutes ~ useHomeRoutes:");
  return (
    <Route
      path="/"
      element={
        <div className="flex flex-row h-screen w-screen">
          <SideBar />
          <div className="flex flex-col gap-2 w-full h-full">
            <TopBar />
            <Outlet />
          </div>
        </div>
      }
    >
      <Route
        path="/home"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/create-course"
        element={
          <PrivateRoute>
            <CreateCourse />
          </PrivateRoute>
        }
      />
      <Route
        path="/my-courses"
        element={
          <PrivateRoute>
            <MyCourses />
          </PrivateRoute>
        }
      />
      <Route
        path="/eranings"
        element={
          <PrivateRoute>
            <Earnings />
          </PrivateRoute>
        }
      />
      <Route
        path="/messages"
        element={
          <PrivateRoute>
            <Messages />
          </PrivateRoute>
        }
      />
      <Route
        path="/settings"
        element={
          <PrivateRoute>
            <Settings />
          </PrivateRoute>
        }
      />
    </Route>
  );
};
