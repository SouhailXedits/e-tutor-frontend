import sendAxiosRequest from "./axios";

type getDataParams = {
  path: string;
  params?: Record<string, number | string>;
  sort?: Array<{
    orderBy: string;
    order: boolean;
  }>;
  filter?: Record<string, string | number>;
  pagination?: {
    limit: number;
    page: number;
  };
  signal?: AbortSignal;
};
export default async function getData<T>({
  path,
  params,
  sort,
  filter,
  pagination,
  signal,
}: getDataParams): Promise<T | null> {
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  const requestPath = `/${path}?${new URLSearchParams({
    ...(params ? { ...params } : {}),
    ...(filter ? { filters: JSON.stringify(filter) } : {}),
    ...(sort ? { sort: JSON.stringify(sort) } : {}),
    ...(pagination
      ? {
          page: pagination.page.toString(),
          limit: pagination.limit.toString(),
        }
      : {}),
  })}`;
  console.log("🚀 ~ requestPath:", requestPath);
  const options = {
    method: "GET",
    url: requestPath,
    signal,
  };
  const { data } = await sendAxiosRequest<T>(options);
  return data;
}
