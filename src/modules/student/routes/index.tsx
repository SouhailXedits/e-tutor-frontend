import { Route } from "react-router-dom";
import PrivateRoute from "modules/shared/routes/PrivateRoute";
import Dashboard from "../components/Home/HomeViews/Dashboard";
import Messages from "../components/Home/HomeViews/Messages";
import PurchaseHistory from "../components/Home/HomeViews/PurchaseHistory";
import Settings from "../components/Home/HomeViews/Settings";
import Teachers from "../components/Home/HomeViews/Teachers";
import Wishlist from "../components/Home/HomeViews/Wishlist";
import StudentMainLayout from "../components/Home/StudentMainLayout";
import PaymentGateway from "../components/purshase/PayementGateway";
import About from "../views/About";
import BeInstructor from "../views/BeInstructor/BeInstructor";
import Contact from "../views/Contact";
import Courses from "../views/Courses";
import Home from "../views/Home";
import Purshases from "../views/Purshases";

export const useStudentHomeRoutes = () => {
  return (
    <Route
      path="/"
      element={
        <PrivateRoute>
          <StudentMainLayout />
        </PrivateRoute>
      }
    >
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
