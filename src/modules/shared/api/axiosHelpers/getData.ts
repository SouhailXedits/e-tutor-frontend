import sendAxiosRequest from "./axios";

type getDataParams = {
  path: string;
  params?: {
    [key: string]: number | string;
  };
  sort?: {
    orderBy: string;
    order: boolean;
  }[];
  filter?: {
    [key: string]: string | number;
  };
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
  const requestPath = `/${path}?${new URLSearchParams({
    ...(params && { ...params }), // spread params to top level
    ...(filter && { filters: JSON.stringify(filter) }), // rename filter to filters
    ...(sort && { sort: JSON.stringify(sort) }), // JSON stringify sort
    ...(pagination && {
      page: pagination.page.toString(),
      limit: pagination.limit.toString(),
    }), // convert page and limit to string
  })}`;
  const options = {
    method: "GET",
    url: requestPath,
    signal: signal,
  };
  return await sendAxiosRequest<T>(options);
}
