import sendAxiosRequest from "./axios";
export default async function patchData<T>(
  path: string,
  payload: { [key: string]: unknown }
): Promise<T | null> {
  const options = {
    method: "PATCH",
    url: path,
    data: payload,
  };
  return await sendAxiosRequest<T>(options);
}
