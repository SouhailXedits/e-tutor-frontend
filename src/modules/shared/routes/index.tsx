import { BrowserRouter, Routes } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getMe } from "modules/auth/data/api/auth.service";
import { useAuthRoutes } from "modules/auth/routes";
import { useHomeRoutes } from "modules/instructor/home/routes";
import { useStudentHomeRoutes } from "modules/student/home/routes";

const Router = () => {
  const authRoutes = useAuthRoutes();
  const studentHomeRoutes = useStudentHomeRoutes();
  const instructorHomeRoutes = useHomeRoutes();
  const { data: user } = useQuery<any>({
    queryKey: ["user"],
    queryFn: async () => await getMe(),
  });
  let isInstructor = false;
  if (user?.role?.id === 1 || user?.role?.id === 3) {
    isInstructor = true;
  }
  return (
    <BrowserRouter>
      <Routes>
        {!isInstructor && studentHomeRoutes}
        {isInstructor && instructorHomeRoutes}
        {authRoutes}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
