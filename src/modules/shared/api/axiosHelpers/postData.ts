import sendAxiosRequest from "./axios";
export default async function postData<T>(
  path: string,
  payload: Record<string, any>
): Promise<{ data: T | null; errors: Record<string, string> | null }> {
  const options = {
    method: "POST",
    url: path,
    data: payload,
  };
  return await sendAxiosRequest<T>(options);
}
