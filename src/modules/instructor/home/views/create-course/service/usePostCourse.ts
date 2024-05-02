import { type Dispatch, type SetStateAction } from "react";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import postData from "modules/shared/api/axiosHelpers/postData";
import useStepsContext from "modules/instructor/views/create-course/context/StepsContext";
export interface IBasicInformationFormData {
  category: number;
  duration: string;
  language: number;
  level: string;
  subcategory: number;
  subtitle: string;
  subtitleLanguage: number;
  title: string;
  topic: string;
  unit: "days" | "hours";
}
export function usePostCourse({
  setApiErrors,
}: {
  setApiErrors: Dispatch<SetStateAction<Record<string, string>>>;
}) {
  const { nextStep } = useStepsContext();
  const [, setSearchParams] = useSearchParams();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: IBasicInformationFormData) => {
      const payload = {
        ...data,
        category: { id: data.category },
        language: { id: data.language },
        subcategory: { id: data.subcategory },
        subtitleLanguage: [{ id: data.subtitleLanguage }],
        duration:
          data.unit === "days"
            ? Number(data.duration)
            : Number(data.duration) / 24,
      };
      const { data: res, errors } = await postData("/courses", payload);
      if (errors) {
        setApiErrors(errors);
        throw new Error("An error occurred while creating the course");
      }
      setSearchParams({ courseId: (res as any)?.id });
    },
    onSuccess: () => {
      toast.success("Course created successfully");
      nextStep();
    },
    onSettled: async () => {
      await queryClient.invalidateQueries({ queryKey: ["courses"] });
    },
  });
}
