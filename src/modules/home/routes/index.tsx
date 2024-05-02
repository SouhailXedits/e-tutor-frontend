import { Route } from "react-router-dom";
import PrivateRoute from "modules/shared/routes/PrivateRoute";
import CreateCourse from "../views/create-course";
import Earnings from "../views/earnings";
import Home from "../views/Home";
import Messages from "../views/messages";
import MyCourses from "../views/my-courses";
import Settings from "../views/settings";

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
    </>
  );
};
