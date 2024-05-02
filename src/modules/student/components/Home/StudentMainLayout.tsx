import { Outlet } from "react-router";
import StudentHeader from "modules/shared/components/Headers/StudentHeader/StudentHeader";
import HomeRoutesTabs from "./StudentsRoutesTabs";

function StudentMainLayout() {
  return (
    <div>
      <HomeRoutesTabs />
      <StudentHeader />
      <Outlet />
    </div>
  );
}

export default StudentMainLayout;
