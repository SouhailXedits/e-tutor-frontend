import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import postData from "../api/axiosHelpers/postData";
import { toast } from "react-toastify";
import { handleUploadImage } from "../api/handleUpload";

export const useUploadImageMutation = () =>
  useMutation({
    mutationKey: ["payement"],
    mutationFn: async (selectedImage: any) => {
      console.log(selectedImage);
      const res = await handleUploadImage(selectedImage);
      console.log(res);
      return res;
    },
    onError: (err: any) => {
      const errMessage = err?.response?.data?.message || "Something went wrong";
      toast.error(errMessage);
    },
    onSuccess: (data) => {
      console.log(data);
      toast.success("uploaded successfully!");
    },
  });
