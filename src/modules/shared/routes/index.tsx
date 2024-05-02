import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useAuthRoutes } from "modules/auth/routes";
import NotFound from "../pages/NotFound";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useStudentHomeRoutes } from "modules/student/home/routes";
import { useHomeRoutes } from "modules/instructor/home/routes";
import { IUser } from "modules/student/home/types/user";
import { getMe } from "modules/auth/data/api/auth.service";

const authRoutes = useAuthRoutes();
const instructorHomeRoutes = useHomeRoutes();
const studentHomeRoutes = useStudentHomeRoutes();
function Router() {
  const { data: user } = useQuery<any>({
    queryKey: ["user"],
    queryFn: async() => await getMe(),
  });
  console.log(user)
  let isInstructor = false;
  if(user?.role?.id === 1 || user?.role?.id === 3){
    isInstructor = true
  }
  console.log(isInstructor)

  // const queryClient = useQueryClient();
  // const user = queryClient.getQueryData(["user"]) as IUser;


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />

        {authRoutes}
        { isInstructor && instructorHomeRoutes}
        { !isInstructor && studentHomeRoutes}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
