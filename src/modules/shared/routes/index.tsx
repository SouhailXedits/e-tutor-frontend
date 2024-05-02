import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useAuthRoutes } from "modules/auth/routes";
import { useHomeRoutes } from "modules/instructor/routes";
import { useStudentHomeRoutes } from "modules/student/routes";
import NotFound from "../pages/NotFound";
import { useGetMe } from "../queries/useGetMe";

const Router = () => {
  const authRoutes = useAuthRoutes();
  const studentHomeRoutes = useStudentHomeRoutes();
  const instructorHomeRoutes = useHomeRoutes();
  const { data: user }: { data: any } = useGetMe();
  let isInstructor = false;
  if ([1, 3].includes(user?.role?.id)) {
    isInstructor = true;
  }
  return (
    <BrowserRouter>
      <Routes>
        {isInstructor ? instructorHomeRoutes : studentHomeRoutes}
        {authRoutes}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
