import ImageUploader from "modules/shared/components/ImageUploader";
import Button from "modules/shared/components/Button/Button";
import Input from "modules/shared/components/Input/Input";
import { useState } from "react";
function UpdateStudentProfileForm({handleSubmit, register, errors, onSubmit, selectedImage, setSelectedImage}: any) {
    return (
      <form className=" flex w-full gap-12" onSubmit={handleSubmit(onSubmit)}>
        <div className=" border w-[30%] p-5 flex flex-col items-center gap-4">
          <ImageUploader register={register} name="photo" selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
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
    );
}

export default UpdateStudentProfileForm
