import {
  type GetHomeResponse,
  type GetHomesProps,
} from "modules/home/types/home";
import api from "modules/shared/api/axios.config";
import { newsApiKey } from "modules/shared/lib/config";

export const getHomes = async (
  params: GetHomesProps
): Promise<GetHomeResponse> => {
  const { search, page } = params;
  const { data } = await api.get<GetHomeResponse>(
    `https://newsdata.io/api/1/news?q=${
      search ?? ""
    }&page=${page}&apiKey=${newsApiKey}`
  );
  return data;
};
