import { type LoginBody } from 'modules/auth/types/auth';

export const login = async (body: LoginBody) => {
  const res = new Promise<boolean>((resolve, reject) => {
    if (body?.username !== 'user' || body?.password !== 'user') {
      reject(new Error('Invalid username or password'));
    }

    resolve(true);
  });

  return await res;
};
