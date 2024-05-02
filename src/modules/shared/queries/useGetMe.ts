import { useQuery } from "@tanstack/react-query";
import { getMe } from "modules/auth/data/api/auth.service";

export function useGetMe() {
  return useQuery({
    queryKey: ["user"],
    queryFn: getMe,
    retry: false,
  });
}
