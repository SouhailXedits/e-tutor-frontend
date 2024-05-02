import { Route } from "react-router-dom";
import PrivateRoute from "modules/shared/routes/PrivateRoute";
import Home from "../views/Home";
import Purshases from "../views/Purshases";
import PaymentGateway from "../components/purshase/PayementGateway";
import StudentsRoutesTabs from "../components/Home/StudentsRoutesTabs";
import Courses from "../views/Courses";
import About from "../views/About";
import Contact from "../views/Contact";
import BeInstructor from "../views/BeInstructor/BeInstructor";
import StudentMainLayout from "../components/Home/StudentMainLayout";
import Settings from "../components/Home/HomeViews/Settings";
import Dashboard from "../components/Home/HomeViews/Dashboard";
import Teachers from "../components/Home/HomeViews/Teachers";
import Messages from "../components/Home/HomeViews/Messages";
import Wishlist from "../components/Home/HomeViews/Wishlist";
import PurchaseHistory from "../components/Home/HomeViews/PurchaseHistory";

export const useStudentHomeRoutes = () => {
  return (
    <Route path="/" element={<StudentMainLayout />}>
      <Route
        path="/home"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      >
        <Route
          path="dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="courses"
          element={
            <PrivateRoute>
              <Courses />
            </PrivateRoute>
          }
        />
        <Route
          path="teachers"
          element={
            <PrivateRoute>
              <Teachers />
            </PrivateRoute>
          }
        />
        <Route
          path="messages"
          element={
            <PrivateRoute>
              <Messages />
            </PrivateRoute>
          }
        />
        <Route
          path="wishlist"
          element={
            <PrivateRoute>
              <Wishlist />
            </PrivateRoute>
          }
        />
        <Route
          path="purchases-history"
          element={
            <PrivateRoute>
              <PurchaseHistory />
            </PrivateRoute>
          }
        />
        <Route
          path="wishlist"
          element={
            <PrivateRoute>
              <Wishlist />
            </PrivateRoute>
          }
        />
        <Route
          path="settings"
          element={
            <PrivateRoute>
              <Settings />
            </PrivateRoute>
          }
        />
      </Route>
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
      <Route
        path="/courses"
        element={
          <PrivateRoute>
            <Courses />
          </PrivateRoute>
        }
      />
      <Route
        path="/about"
        element={
          <PrivateRoute>
            <About />
          </PrivateRoute>
        }
      />
      <Route
        path="/contact"
        element={
          <PrivateRoute>
            <Contact />
          </PrivateRoute>
        }
      />
      <Route
        path="/be-instructor"
        element={
          <PrivateRoute>
            <BeInstructor />
          </PrivateRoute>
        }
      />
    </Route>
  );
};
