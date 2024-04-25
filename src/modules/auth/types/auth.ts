export interface registerBody {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
}


export interface LoginBody {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
}
export interface ConfirmEmailBody {
  hash: string;
}