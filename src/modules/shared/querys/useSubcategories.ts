import { useQuery } from "@tanstack/react-query";
import getData from "../api/axiosHelpers/getData";
import { type PaginationType, type subcategoryType } from "../types/db";

export default function useSubategories({
  categoryId,
}: {
  categoryId: number | null;
}) {
  return useQuery<PaginationType<subcategoryType> | null>({
    queryKey: ["subcategories", categoryId],
    queryFn: async () =>
      await getData({
        path: "subcategories",
        pagination: {
          limit: 100,
          page: 1,
        },
        params: {
          categoryId: categoryId as number,
        },
      }),
    enabled: !!categoryId,
  });
}
