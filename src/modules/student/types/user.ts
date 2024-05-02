export interface IUser {
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  id: number;
  email: string;
  provider: string;
  socialId: string;
  firstName: string;
  lastName: string;
  username: string | null;
  title: string | null;
  bigoraphie: string | null;
  persenalWebsite: string | null;
  linkedin: string | null;
  twitter: string | null;
  facebook: string | null;
  instagram: string | null;
  whatsapp: string | null;
  youtube: string | null;
  photo: {
    id: number;
    path: string;
  };
  role: {
    id: number;
    name: string;
  };
  status: {
    id: number;
    name: string;
  };
}


export interface IUpdateStudentProfile {
  [key: string]: unknown;
  firstName?: string;
  lastName?: string;
  username?: string;
  email?: string;
  title?: string;
  photo?: {id: number};
}