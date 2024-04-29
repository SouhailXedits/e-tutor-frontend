export interface registerBody {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
}

export interface LoginBody {
  email: string;
  password: string;
}
export interface ConfirmEmailBody {
  hash: string;
}
