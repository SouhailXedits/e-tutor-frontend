import axios from "axios";

export const handleUploadImage = async (selectedImage: any) => {
  console.log(selectedImage);
  const formData = new FormData();
  formData.append("file", selectedImage);

  const response = axios
    .post("http://localhost:4000/api/v1/files/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
    })
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.error("Error uploading file:", error);
    });
  const data = await response;
  console.log(data);
  return data;
};
