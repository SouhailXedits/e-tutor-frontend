import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import { handleUploadImage } from "../api/handleUpload";

export const useUploadImageMutation = () =>
  useMutation({
    mutationKey: ["payement"],
    mutationFn: async (selectedImage: File) => {
      const res = await handleUploadImage(selectedImage);
      return res;
    },
    onError: (err) => {
      const errMessage = err?.response?.data?.message || "Something went wrong";
      toast.error(errMessage);
    },
    onSuccess: (data) => {
      toast.success("uploaded successfully!");
    },
  });
