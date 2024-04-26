import sendAxiosRequest from "./axios";

export default async function deleteData(path: string): Promise<void> {
  const options = {
    method: "DELETE",
    url: path,
  };
  await sendAxiosRequest(options);
}
