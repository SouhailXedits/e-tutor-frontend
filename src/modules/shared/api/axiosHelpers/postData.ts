import sendAxiosRequest from "./axios";
export default async function postData<T>(
  path: string,
  payload: { [key: string]: unknown }
): Promise<T | null> {
  const options = {
    method: "POST",
    url: path,
    data: payload,
  };
  return await sendAxiosRequest<T>(options);
}
