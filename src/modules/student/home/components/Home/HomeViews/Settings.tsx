import { yupResolver } from "@hookform/resolvers/yup";
import { useQueryClient } from "@tanstack/react-query";

import Button from "modules/shared/components/Button/Button";
import ImageUploader from "modules/shared/components/ImageUploader";
import Input from "modules/shared/components/Input/Input";
import { useUpdateStudentProfileMutation } from "modules/student/home/services/queries/users.query";
import { IUpdateStudentProfile, IUser } from "modules/student/home/types/user";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";

function Settings() {
  const { mutateAsync: updateStudentProfile } =
    useUpdateStudentProfileMutation();
  const queryClient = useQueryClient();
  const user = queryClient.getQueryData(["user"]) as IUser;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUpdateStudentProfile>({
    resolver: yupResolver(
      yup.object().shape({
        photo: yup.string().optional(),
        firstName: yup.string().optional(),
        lastName: yup.string().optional(),
        username: yup.string().optional(),
        email: yup.string().email().optional(),
        title: yup.string().max(50).optional(),
      })
    ),
  });

  const onSubmit: SubmitHandler<IUpdateStudentProfile> = async (data) => {
    const userId = user.id;
    data.photo = "";
    const filteredData = Object.fromEntries(
      Object.entries(data).filter(([key, value]) => value !== "")
    );

    await updateStudentProfile({ id: userId, body: filteredData });
  };
  return (
    <div className=" py-5">
      <h2 className=" text-xl text-gray-800 font-semibold">Account settings</h2>
      <form className=" flex w-full gap-12" onSubmit={handleSubmit(onSubmit)}>
        <div className=" border w-[30%] p-5 flex flex-col items-center gap-4">
          <ImageUploader register={register} name="photo" />
          <p className=" text-gray-500 text-sm">
            Image size should be under 1MB and image ration needs to be 1:1
          </p>
        </div>
        <div className=" w-full">
          <p>Full name</p>
          <div className=" flex items-center gap-4 w-full justify-between">
            <Input
              id="firstName"
              name="firstName"
              placeholder="First Name"
              register={register}
              errors={errors}
              containerClassName=" mt-1 gap-3 w-full"
            />
            <Input
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              register={register}
              errors={errors}
              containerClassName=" mt-1 gap-3 w-full"
            />
          </div>
          <Input
            id="username"
            name="username"
            label="Username"
            placeholder="Username..."
            register={register}
            errors={errors}
            containerClassName=" mt-1 gap-3 w-full"
          />
          <Input
            id="email"
            name="email"
            type="email"
            label="Email"
            placeholder="Email adress"
            register={register}
            errors={errors}
            containerClassName=" mt-1 gap-3 w-full"
          />
          <Input
            id="title"
            name="title"
            label="Title"
            placeholder="Your tittle, proffesion or small biography"
            register={register}
            errors={errors}
            containerClassName=" mt-1 gap-3 w-full"
          />
          <Button
            type="submit"
            // isLoading={isLoading}
            className="flex gap-2 px-6 mt-2"
            size="lg"
          >
            Save Changes
          </Button>
        </div>
      </form>
      <div></div>
    </div>
  );
}

export default Settings;
