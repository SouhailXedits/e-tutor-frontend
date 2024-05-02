
import api from "modules/shared/api/axios.config";
import postData from "modules/shared/api/axiosHelpers/postData";
import { newsApiKey } from "modules/shared/lib/config";
import { GetHomeResponse, GetHomesProps } from "../../types/home";

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

export const logout = async () => postData("/auth/logout", {});
