import { useQuery } from "@tanstack/react-query";
import getData from "../api/axiosHelpers/getData";
import { type CourseType } from "../types/db";

export default function useCourse({ courseId }: { courseId?: number }) {
  return useQuery<CourseType | null>({
    queryKey: ["courses", courseId],
    queryFn: async () =>
      await getData({
        path: `courses/${courseId as number}`,
      }),
    enabled: !!courseId,
  });
}
