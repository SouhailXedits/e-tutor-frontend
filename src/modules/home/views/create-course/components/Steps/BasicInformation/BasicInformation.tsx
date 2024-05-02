import React, { useState } from "react";
import { type FieldErrors, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import postData from "modules/shared/api/axiosHelpers/postData";
import Input from "modules/shared/components/Input";
import Select from "modules/shared/components/Select";
import useCategories from "modules/shared/querys/useCategories";
import useLanguage from "modules/shared/querys/useLanguage";
import useSubategories from "modules/shared/querys/useSubcategories";
import { CourseLevelEnum } from "modules/shared/types/db";
import useStepsContext from "../../../context/StepsContext";
import StepContainer from "../../StepContainer/StepContainer";

interface IFormData {
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
function BasicInformation() {
  const { nextStep } = useStepsContext();
  // State
  const [apiErrors, setApiErrors] = useState<Record<string, string>>({});
  const [categoryId, setCategoryId] = useState<number | null>(null);
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
  } = useForm<IFormData>();
  const errors: FieldErrors<IFormData> = { ...formErrors, ...apiErrors };
  // Create a new course mutation
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: async (data: IFormData) => {
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
      const courseId: number = res?.id;
      console.log("🚀 ~ mutationFn: ~ courseId:", courseId);
    },
    onSuccess: () => {
      toast.success("Course created successfully");
      nextStep();
    },
    onSettled: async () => {
      await queryClient.invalidateQueries({ queryKey: ["courses"] });
    },
  });
  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log("🚀 ~ onSubmit={handleSubmit ~ data:", data);
        mutate(data);
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
              register={register}
              errors={errors}
              required
            />
            <div className="flex flex-row items-center justify-between gap-8">
              <Select
                label="Course Language"
                name="language"
                inputLabel="Select..."
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
