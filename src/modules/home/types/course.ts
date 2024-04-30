export interface ICourse {
  createdAt: string;
  updatedAt: string;
  id: number;
  title: string;
  subtitle: string;
  topic: string;
  level: string;
  duration: number;
  description: { text: string }; // Assuming description is always an object with a 'text' property
  subjects: string[];
  audience: string[];
  requirements: string[];
  welcomeMessage: string;
  congratsMessage: string;
  price: number;
  discount: number;
  thumbnail: {
    id: string;
    path: string;
  };
  trailer: {
    id: string;
    path: string;
  };
  instructors: {
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
    id: number;
    socialId: string | null;
    firstName: string;
    lastName: string;
    username: string | null;
    title: string | null;
    bigoraphie: string | null; // Typo? Should it be 'biography'?
    persenalWebsite: string | null; // Typo? Should it be 'personalWebsite'?
    linkedin: string | null;
    twitter: string | null;
    facebook: string | null;
    instagram: string | null;
    whatsapp: string | null;
    youtube: string | null;
  }[];
}


