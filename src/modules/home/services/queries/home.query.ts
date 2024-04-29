import { useQuery } from '@tanstack/react-query';
import {
  type GetHomeResponse,
  type GetHomesProps,
} from 'modules/home/types/home';
import { getHomes, logout } from '../api/home.service';

export const useHomesQuery = (params: GetHomesProps) =>
  useQuery<GetHomeResponse>({
    queryKey: ['getHomes', { params }],
    queryFn: async () => {
      const res = await getHomes(params);
      return res;
    },
  });
