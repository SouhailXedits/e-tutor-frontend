import { useEffect, useState } from "react";
import { type FieldErrors, useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import Input from "modules/shared/components/Input";
import Select from "modules/shared/components/Select";
import useCategories from "modules/shared/querys/useCategories";
import useCourse from "modules/shared/querys/useCourse";
import useLanguage from "modules/shared/querys/useLanguage";
import useSubategories from "modules/shared/querys/useSubcategories";
import { CourseLevelEnum } from "modules/shared/types/db";
import {
  type IBasicInformationFormData,
  usePostCourse,
} from "../../../service/usePostCourse";
import { useUpdateCourse } from "../../../service/useUpdateCourse";
import StepContainer from "../../StepContainer/StepContainer";

function BasicInformation() {
  const [searchParams] = useSearchParams();
  const courseId = searchParams.get("courseId");
  const { data: courseData } = useCourse({
    courseId: Number(courseId),
  });
  // State
  const [apiErrors, setApiErrors] = useState<Record<string, string>>({});
  const [categoryId, setCategoryId] = useState<number | null>(null);
  useEffect(() => {
    if (courseData?.category.id) {
      setCategoryId(courseData.category.id);
    }
  }, [courseData?.category.id]);
  const { data: languagesData } = useLanguage();
  const { data: categoriesData } = useCategories();
  const { data: subcategoriesData } = useSubategories({
    categoryId,
  });
  // form
  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
  } = useForm<IBasicInformationFormData>();
  const errors: FieldErrors<IBasicInformationFormData> = {
    ...formErrors,
    ...apiErrors,
  };
  // Create a new course mutation
  const { mutate: post, isPending: isPending1 } = usePostCourse({
    setApiErrors,
  });
  // Update course mutation
  const { mutate: patch, isPending: isPending2 } = useUpdateCourse({
    setApiErrors,
    courseId: Number(courseId),
  });
  const isPending = isPending1 || isPending2;
  return (
    <form
      onSubmit={handleSubmit((data) => {
        courseId ? patch(data) : post(data);
      })}
    >
      <StepContainer isPending={isPending}>
        {
          <div className="grid grid-cols-1 gap-5 mb-6 grid-rows-5 grid-row flex-wrap h-full w-full">
            <Input
              label="Title"
              name="title"
              type="text"
              placeholder="Your course title"
              defaultValue={courseData?.title}
              register={register}
              errors={errors}
              className=" "
              required
            />
            <Input
              label="Subtitle"
              name="subtitle"
              type="text"
              placeholder="Your course subtitle"
              defaultValue={courseData?.subtitle}
              register={register}
              errors={errors}
              required
            />
            <div className="flex flex-row items-center justify-between gap-8">
              <Select
                label="Course Category"
                name="category"
                inputLabel="Select..."
                register={register}
                defaultValue={
                  courseData
                    ? {
                        label: courseData.category.name,
                        value: courseData.category.id,
                      }
                    : undefined
                }
                options={categoriesData?.data.map((e) => ({
                  label: e.name,
                  value: e.id,
                }))}
                setValueInParent={setCategoryId}
                errors={errors}
                required
              />
              <Select
                label="Course Subcategory"
                name="subcategory"
                inputLabel="Select..."
                defaultValue={
                  courseData
                    ? {
                        label: courseData.subcategory.name,
                        value: courseData.subcategory.id,
                      }
                    : undefined
                }
                register={register}
                options={
                  subcategoriesData
                    ? subcategoriesData.data.length > 0
                      ? subcategoriesData.data.map((e) => ({
                          label: e.name,
                          value: e.id,
                        }))
                      : [
                          {
                            label: "No subcategories found",
                            value: 0,
                            disabled: true,
                          },
                        ]
                    : [
                        {
                          label: "Select a category first",
                          value: 0,
                          disabled: true,
                        },
                      ]
                }
                errors={errors}
                required
              />
            </div>
            <Input
              label="Course Topic"
              name="topic"
              type="text"
              placeholder="What is primarily thaught in this course?"
              defaultValue={courseData?.topic}
              register={register}
              errors={errors}
              required
            />
            <div className="flex flex-row items-center justify-between gap-8">
              <Select
                label="Course Language"
                name="language"
                inputLabel="Select..."
                defaultValue={
                  courseData
                    ? {
                        label: courseData.language.name,
                        value: courseData.language.id,
                      }
                    : undefined
                }
                register={register}
                options={languagesData?.data.map((e) => ({
                  label: e.name,
                  value: e.id,
                }))}
                errors={errors}
                required
              />
              <Select
                label="Subtitle Language (Optional)"
                name="subtitleLanguage"
                inputLabel="Select..."
                defaultValue={
                  courseData
                    ? {
                        label: courseData.subtitleLanguage[0].name,
                        value: courseData.subtitleLanguage[0].id,
                      }
                    : undefined
                }
                register={register}
                options={languagesData?.data.map((e) => ({
                  label: e.name,
                  value: e.id,
                }))}
                errors={errors}
                required
              />
              <Select
                label="Course level"
                name="level"
                inputLabel="Select..."
                defaultValue={
                  courseData
                    ? {
                        label: courseData.level,
                        value: courseData.level,
                      }
                    : undefined
                }
                register={register}
                options={Array.from(Object.values(CourseLevelEnum)).map(
                  (e) => ({
                    label: e,
                    value: e,
                  })
                )}
                errors={errors}
              />
              <div className="relative w-full group">
                <Input
                  label="Duration"
                  name="duration"
                  type="number"
                  className="h-11"
                  defaultValue={courseData?.duration}
                  placeholder="Course duration"
                  register={register}
                  errors={errors}
                  required
                />
                <Select
                  containerClassName="bg-white !absolute top-[37.5%] !border-t !border-black z-10 !shadow-none !hover:shadow-none h-fit right-1 w-[40%]"
                  className="border-0 h-9 !shadow-none h!over:shdow-none !rounded-l-none   "
                  name="unit"
                  defaultValue={{
                    label: "Days",
                    value: "days",
                  }}
                  register={register}
                  options={[
                    {
                      label: "Hours",
                      value: "hours",
                    },
                    {
                      label: "Days",
                      value: "days",
                    },
                  ]}
                  errors={errors}
                  required
                />
              </div>
            </div>
          </div>
        }
      </StepContainer>
    </form>
  );
}
export default BasicInformation;
