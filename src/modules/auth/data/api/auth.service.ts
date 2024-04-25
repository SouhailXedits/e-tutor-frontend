import { API_ENDPOINT } from 'config';
import { type LoginBody } from 'modules/auth/types/auth';

export const login = async (body: LoginBody) => {
  console.log(API_ENDPOINT)
  const res = await fetch(`${API_ENDPOINT}/auth/email/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  console.log(res.ok)
  console.log(res.json())
  if (!res.ok) {
    console.log(res)
    throw new Error('Invalid Credential');
  } 

  // const res = new Promise<boolean>((resolve, reject) => {
  //   if (body?.username !== 'user' || body?.password !== 'user') {
  //     reject(new Error('Invalid username or password'));
  //   }

  //   resolve(true);
  // });

  // return await res;
};
