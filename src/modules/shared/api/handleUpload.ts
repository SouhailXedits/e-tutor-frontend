import axios from "axios";
import { API_ENDPOINT } from "config";
import { type FileType } from "../types/db";

export const handleUploadImage = async (
  selectedImage: File
): Promise<null | FileType> => {
  const formData = new FormData();
  formData.append("file", selectedImage);
  try {
    const response = await axios.post("/files/upload", formData, {
      baseURL: API_ENDPOINT,
      timeout: 0,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("🚀 ~ error:", error);
    return null;
  }
};
