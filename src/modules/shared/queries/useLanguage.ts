import { useQuery } from "@tanstack/react-query";
import getData from "../api/axiosHelpers/getData";
import { type languageType, type PaginationType } from "../types/db";

export default function useLanguage() {
  return useQuery<PaginationType<languageType> | null>({
    queryKey: ["languages"],
    queryFn: async () =>
      await getData({
        path: "languages",
        pagination: {
          limit: 100,
          page: 1,
        },
      }),
  });
}
