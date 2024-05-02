import { useQuery } from "@tanstack/react-query";
import getData from "../api/axiosHelpers/getData";
import { type categoryType, type PaginationType } from "../types/db";

export default function useCategories() {
  return useQuery<PaginationType<categoryType> | null>({
    queryKey: ["categories"],
    queryFn: async () =>
      await getData({
        path: "categories",
        pagination: {
          limit: 100,
          page: 1,
        },
      }),
  });
}
