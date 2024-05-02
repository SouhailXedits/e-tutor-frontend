import sendAxiosRequest from "./axios";
export default async function patchData<T>(
  path: string,
  payload: Record<string, unknown>
): Promise<{ data: T | null; errors: Record<string, string> | null }> {
  const options = {
    method: "PATCH",
    url: path,
    data: payload,
  };
  return await sendAxiosRequest<T>(options);
}
