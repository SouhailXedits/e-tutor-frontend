import { type Dispatch, type SetStateAction } from "react";
import { toast } from "react-toastify";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useStepsContext from "modules/instructor/views/create-course/context/StepsContext";
import patchData from "modules/shared/api/axiosHelpers/updateData";
import { type IUpdateCourse } from "../types/IUpdateCourse";
export function useUpdateCourse({
  setApiErrors,
  courseId,
  navigateFowarad = false,
}: {
  setApiErrors?: Dispatch<SetStateAction<Record<string, string>>>;
  courseId: number;
  navigateFowarad?: boolean;
}) {
  const { nextStep } = useStepsContext();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: Partial<IUpdateCourse>) => {
      const payload: any = { ...data };
      if (data.category) payload.category = { id: Number(data.category) };
      if (data.language) payload.language = { id: Number(data.language) };
      if (data.subcategory)
        payload.subcategory = { id: Number(data.subcategory) };
      if (data.subtitleLanguage)
        payload.subtitleLanguage = [{ id: Number(data.subtitleLanguage) }];
      if (data.thumbnail) payload.thumbnail = { id: Number(data.thumbnail) };
      if (data.trailer) payload.trailer = { id: Number(data.trailer) };
      if (data.instructors)
        payload.instructors = data.instructors.map((id) => ({
          id: Number(id),
        }));
      if (data.duration)
        payload.duration =
          data.unit === "days"
            ? Number(data.duration)
            : Number(data.duration) / 24;
      const { errors } = await patchData(`/courses/${courseId}`, payload);
      if (errors) {
        setApiErrors?.(errors);
        throw new Error("An error occurred while updating the course");
      }
    },
    onSuccess: () => {
      toast.success("Course updated successfully");
      navigateFowarad && nextStep();
    },
    onSettled: async () => {
      await queryClient.invalidateQueries({ queryKey: ["courses", courseId] });
    },
  });
}
