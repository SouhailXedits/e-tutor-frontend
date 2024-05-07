import { yupResolver } from "@hookform/resolvers/yup";
import { useQueryClient } from "@tanstack/react-query";
import { useUpdateStudentProfileMutation } from "modules/student/services/queries/users.query";
import { IUpdateStudentProfile, IUser } from "modules/student/types/user";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import UpdateStudentProfileForm from "../UpdateStudentProfileForm";
import { useState } from "react";
import { useUploadImageMutation } from "modules/shared/queries/useUploadImage";
import axios from "axios";

function Settings() {
  const { mutateAsync: updateStudentProfile } =
    useUpdateStudentProfileMutation();
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const { mutateAsync: uploadImage } = useUploadImageMutation();
  const queryClient = useQueryClient();
  const user = queryClient.getQueryData(["user"]) as IUser;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUpdateStudentProfile>({
    resolver: yupResolver(
      yup.object().shape({
        firstName: yup.string().optional(),
        lastName: yup.string().optional(),
        username: yup.string().optional(),
        email: yup.string().email().optional(),
        title: yup.string().max(50).optional(),
      })
    ),
  });

  const onSubmit: SubmitHandler<IUpdateStudentProfile> = async (data) => {
    if (selectedImage) {
      const image = await uploadImage(selectedImage) as any;
      console.log(image);
      const fileId = image.file.id ;
      data.photo = { id: fileId };
    }

    const userId = user.id;
    const filteredData = Object.fromEntries(
      Object.entries(data).filter(([key, value]) => value !== "")
    );

    await updateStudentProfile({ id: userId, body: filteredData });
  };
  return (
    <div className=" py-5">
      <h2 className=" text-xl text-gray-800 font-semibold">Account settings</h2>
      <UpdateStudentProfileForm
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        errors={errors}
        register={register}
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
      />
      <div></div>
    </div>
  );
}

export default Settings;
