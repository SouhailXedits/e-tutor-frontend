import { type Dispatch, type SetStateAction } from "react";
import { toast } from "react-toastify";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import patchData from "modules/shared/api/axiosHelpers/updateData";
import { type IBasicInformationFormData } from "./usePostCourse";
import useStepsContext from "modules/instructor/views/create-course/context/StepsContext";
export interface IUpdateCourse extends IBasicInformationFormData {
  // Step2
  thumbnail: string;
  trailer: string;
  description: JSON;
  subjects: string[];
  audience: string[];
  requirements: string[];
  // Step3
  welcomeMessage: string;
  congratsMessage: string;
  price: number;
  discount: number;
  // Must exist
  instructors: number[];
}
export function useUpdateCourse({
  setApiErrors,
  courseId,
}: {
  setApiErrors: Dispatch<SetStateAction<Record<string, string>>>;
  courseId: number;
}) {
  const { nextStep } = useStepsContext();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: Partial<IUpdateCourse>) => {
      const payload: any = { ...data };
      if (data.category) payload.category = { id: data.category };
      if (data.language) payload.language = { id: data.language };
      if (data.subcategory) payload.subcategory = { id: data.subcategory };
      if (data.subtitleLanguage)
        payload.subtitleLanguage = [{ id: data.subtitleLanguage }];
      if (data.thumbnail) payload.thumbnail = { id: data.thumbnail };
      if (data.trailer) payload.trailer = { id: data.trailer };
      if (data.instructors)
        payload.instructors = data.instructors.map((id) => ({ id }));
      const { errors } = await patchData(`/courses/${courseId}`, payload);
      if (errors) {
        setApiErrors(errors);
        throw new Error("An error occurred while updating the course");
      }
    },
    onSuccess: () => {
      toast.success("Course updated successfully");
      nextStep();
    },
    onSettled: async () => {
      await queryClient.invalidateQueries({ queryKey: ["courses", courseId] });
    },
  });
}
