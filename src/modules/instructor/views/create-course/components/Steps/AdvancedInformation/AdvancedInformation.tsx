import { useEffect, useState } from "react";
import { type FieldErrors, useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import { extractArrayFromKeys } from "../../../helpers/extractArrayFromKeys";
import useCurrentCourse from "../../../hooks/useCurrentCourse";
import { useUpdateCourse } from "../../../service/useUpdateCourse";
import { type IBasicInformationFormData } from "../../../types/IBasicInformationFormData";
import StepContainer from "../../StepContainer/StepContainer";
import { FileUploadForm } from "./components/FileUploadForm";
import { Question } from "./components/Question";
import { TextArea } from "./components/TextArea";

export default function AdvancedInformation() {
  const courseData = useCurrentCourse();
  const [searchParams] = useSearchParams();
  const courseId = searchParams.get("courseId");
  const [apiErrors, setApiErrors] = useState<Record<string, string>>({});
  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
    trigger,
    reset,
  } = useForm<any>({ mode: "onChange" });
  useEffect(() => {
    if (courseData) {
      reset({
        description: courseData.description,
        subjects: courseData.subjects?.reduce(
          (acc, subject, i) => ({ ...acc, ["subjects" + String(i)]: subject }),
          {}
        ),
        audience: courseData.audience?.reduce(
          (acc, subject, i) => ({ ...acc, ["audience" + String(i)]: subject }),
          {}
        ),
        requirements: courseData.requirements?.reduce(
          (acc, subject, i) => ({
            ...acc,
            ["requirements" + String(i)]: subject,
          }),
          {}
        ),
      });
      void trigger();
    }
  }, [trigger]);
  const errors: FieldErrors<IBasicInformationFormData> = {
    ...formErrors,
    ...apiErrors,
  };
  // Update course mutation
  const { mutate: patch, isPending } = useUpdateCourse({
    setApiErrors,
    courseId: Number(courseId),
    navigateFowarad: true,
  });
  return (
    <form
      onSubmit={handleSubmit((data) => {
        const payload = {
          description: data.description,
          subjects: extractArrayFromKeys(data, "subjects"),
          audience: extractArrayFromKeys(data, "audience"),
          requirements: extractArrayFromKeys(data, "requirements"),
        };
        patch(payload);
      })}
    >
      <StepContainer isPending={isPending}>
        <div className="flex flex-row gap-8 border-b pb-4 mb-4">
          <FileUploadForm
            title="Course Thumbnail"
            name="thumbnail"
            defaultValue={
              courseData?.thumbnail?.path ?? "/default-thumbnail.png"
            }
            description={
              <>
                Upload your course Thumbnail here.{" "}
                <strong className="text-gray-900">Important guidelines</strong>:
                1200x800 pixels or 12:8 Ratio. Supported format:{" "}
                <strong className="text-gray-900">.jpg, .jpeg, or .png</strong>
              </>
            }
            type="image"
          />
          <FileUploadForm
            title="Course Trailer"
            name="trailer"
            defaultValue={courseData?.trailer?.path ?? "/default-trailer.png"}
            description="Students who watch a well-made promo video are 5X more likely to enroll in your course. We've seen that statistic go up to 10X for exceptionally awesome videos."
            type="video"
          />
        </div>
        <main className="w-full h-full flex flex-col">
          <div className="border-b pb-4 mb-4">
            <TextArea
              label="Course Description"
              name="description"
              defaultValue={courseData?.description ?? ""}
              placeholder="Your course description"
              register={register}
              errors={errors}
              required
            />
          </div>
          <div className="flex flex-col">
            <Question
              question={"What you will teach in this course"}
              placeholder="What you will teach in this course..."
              name="subjects"
              register={register}
              errors={errors}
              defaultValues={courseData?.subjects}
            />
            <Question
              question={"Target Audience"}
              placeholder="Who this course is for..."
              name="audience"
              register={register}
              errors={errors}
              defaultValues={courseData?.audience}
            />
            <Question
              question={"Course requirements"}
              placeholder="What is you course requirements..."
              name="requirements"
              register={register}
              errors={errors}
              defaultValues={courseData?.requirements}
            />
          </div>
        </main>
      </StepContainer>
    </form>
  );
}
