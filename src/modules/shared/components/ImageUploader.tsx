import React, { InputHTMLAttributes, useState } from "react";
import { ImageIcon } from "lucide-react";
import { Path } from "react-hook-form";
import { toast } from "react-toastify";

function ImageUploader ({register, name}: {
    register: any,
    name: Path<any>
}) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const image = new Image();
        image.src = reader.result as string;
        image.onload = () => {
          if (file.size > 1024 * 1024) {
            toast.error("Image size exceeds 1MB. Please choose a smaller image.");
          } else if (image.width !== image.height) {
            toast.error(
              "Image aspect ratio must be 1:1. Please choose a square image."
            );
          } else {
            setSelectedImage(reader.result as string);
          }
        };
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClick = () => {
    const fileInput = document.getElementById("fileInput") as HTMLInputElement;
    fileInput.click();
  };
  

  return (
    <div className="relative flex justify-center items-center w-full">
      <input
        id="fileInput"
        type="file"
        accept="image/*"
        {...register(name as Path<any>)}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        onChange={handleImageChange}
      />
      {selectedImage ? (
        <img
          src={selectedImage}
          alt="Preview"
          className="object-cover cursor-pointer "
          onClick={handleClick}
        />
      ) : (
        <div
          className="flex justify-center items-center w-full h-full cursor-pointer bg-gray-200"
          onClick={handleClick}
        >
          <ImageIcon className="text-5xl h-full w-full text-gray-600" />
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
