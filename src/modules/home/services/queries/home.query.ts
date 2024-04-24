import { useQuery } from '@tanstack/react-query';
import {
  type GetHomeResponse,
  type GetHomesProps,
} from 'modules/home/types/home';
import { getHomes } from '../api/home.service';

export const useHomesQuery = (params: GetHomesProps) =>
  useQuery<GetHomeResponse>(['getHomes', { params }], async () => {
    const res = await getHomes(params);
    return res;
  });
