import { type ReactNode } from "react";
import { useForm } from "react-hook-form";
import { LuUpload } from "react-icons/lu";
import { useSearchParams } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { handleUploadImage } from "modules/shared/api/handleUpload";
import Button from "modules/shared/components/Button";
import Input from "modules/shared/components/Input";
import Modal from "../../../../../../../shared/components/Modal";
import { useUpdateCourse } from "../../../../service/useUpdateCourse";
import { type IUploadFile } from "../../../../types/IUploadFile";
export function FileUploadForm({
  title,
  name,
  defaultValue,
  description,
  type,
}: {
  title: string;
  name: string;
  defaultValue: string;
  description: string | ReactNode;
  type: "video" | "image";
}) {
  const [searchParams] = useSearchParams();
  const courseId = searchParams.get("courseId");
  const queryClient = useQueryClient();
  const { register, handleSubmit, watch } = useForm<IUploadFile>();
  const file = watch(name);
  // Update course mutation
  const { mutate: patch, isPending: isPatching } = useUpdateCourse({
    courseId: Number(courseId),
  });
  // upload file mutation
  const { mutate, isPending } = useMutation({
    onMutate: async (data: IUploadFile) => {
      console.log("🚀 ~ onMutate: ~ data:", data[name][0]);
      const res = await handleUploadImage(data[name][0]);
      console.log("🚀 ~ onMutate: ~ res:", res);
      patch({ [name]: res?.id });
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["course"] });
    },
  });
  return (
    <section className="flex flex-col gap-2 p-4 w-1/2">
      <span className="text-lg text-gray-900">{title}</span>
      <div className="flex flex-row items-start gap-4 ">
        <img src={defaultValue} alt="" />
        <div className="flex flex-col gap-6 justify-between items-start h-full">
          <span className="text-gray-600 text-[0.95rem]">{description}</span>
          <Modal
            title={`Upload ${type}`}
            openTrigger={
              <Button
                type="button"
                variant="secondaryPrimary"
                size="md"
                className="flex flex-row items-center gap-1.5 w-fit"
              >
                <span className="capitalize">Upload {type}</span>
                <LuUpload className="size-4" />
              </Button>
            }
            submitTrigger={<></>}
          >
            <form
              className="flex flex-col"
              onSubmit={handleSubmit((data) => {
                mutate(data);
              })}
            >
              <Input
                type="file"
                className="cursor-pointer"
                name={name}
                register={register}
              />
              <span className="text-gray-600 text-sm mb-4">
                <strong className="text-gray-900">Note:</strong> All files
                should be at least 720p and less than 4.0 GB.
              </span>
              <div className="w-full flex justify-end items-end">
                <Button
                  className="w-40 "
                  isLoading={isPending || isPatching}
                  disabled={!file}
                  type="submit"
                >
                  Upload {type}
                </Button>
              </div>
            </form>
          </Modal>
        </div>
      </div>
    </section>
  );
}
