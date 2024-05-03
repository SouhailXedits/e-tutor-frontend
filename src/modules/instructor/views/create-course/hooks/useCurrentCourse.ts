import { useSearchParams } from "react-router-dom";
import useCourse from "modules/shared/queries/useCourse";
export default function useCurrentCourse() {
  const [searchParams] = useSearchParams();
  const courseId = searchParams.get("courseId");
  const { data } = useCourse({
    courseId: courseId ? Number(courseId) : undefined,
  });
  return data;
}
