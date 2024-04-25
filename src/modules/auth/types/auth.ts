export interface registerBody {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
}


export interface LoginBody {
  username: string;
  password: string;
}
export interface ConfirmEmailBody {
  hash: string;
}