import { Route } from "react-router-dom";
import CreateCourse from "modules/home/views/create-course";
import Earnings from "modules/home/views/earnings";
import Messages from "modules/home/views/messages";
import MyCourses from "modules/home/views/my-courses";
import Settings from "modules/home/views/settings";
import PrivateRoute from "modules/shared/routes/PrivateRoute";
import Home from "../views/Home";

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
