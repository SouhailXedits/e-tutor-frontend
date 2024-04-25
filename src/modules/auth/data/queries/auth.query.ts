import { useMutation } from '@tanstack/react-query';
import { type LoginBody } from 'modules/auth/types/auth';
import { login } from '../api/auth.service';

export const useLoginQuery = () =>
  useMutation({
    mutationKey: ['login'],
    mutationFn: async (body: LoginBody) => {
      const res = await login(body);
      return res;
    },
  });
