import { Route } from "react-router-dom";
import CreateCourse from "../views/create-course";
import Earnings from "../views/earnings";
// import PrivateRoute from "modules/shared/routes/PrivateRoute";
import Home from "../views/Home";
import Messages from "../views/messages";
import MyCourses from "../views/my-courses";
import Settings from "../views/settings";

export const useHomeRoutes = () => {
  return (
    <>
      <Route path="/home" element={<Home />} />
      <Route path="/create-course" element={<CreateCourse />} />
      <Route path="/my-courses" element={<MyCourses />} />
      <Route path="/eranings" element={<Earnings />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/settings" element={<Settings />} />
    </>
  );
};
