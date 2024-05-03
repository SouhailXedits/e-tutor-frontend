import axios from "axios";
import { API_ENDPOINT } from "config";

export const handleUploadImage = async (
  selectedImage: File
): Promise<null | unknown> => {
  const formData = new FormData();
  formData.append("file", selectedImage);
  const response = axios
    .post("/files/upload", formData, {
      baseURL: API_ENDPOINT,
      timeout: 0,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error("Error uploading file:", error);
      return null;
    });
  const data = await response;
  return data;
};
