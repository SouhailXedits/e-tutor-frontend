export interface GeneralDbType {
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

export interface PaginationType<T> {
  data: T[];
  hasNextPage: boolean;
}

export interface languageType {
  id: number;
  name: string;
}

export interface categoryType {
  id: number;
  name: string;
  color: string;
}

export interface subcategoryType {
  id: number;
  name: string;
}

export enum CourseLevelEnum {
  All = "All",
  Beginner = "Beginner",
  Intermediate = "Intermediate",
  Expert = "Expert",
}
export enum CourseStatusEnum {
  draft = "draft",
  toBeReviewed = "toBeReviewed",
  published = "published",
  rejected = "rejected",
}
export interface FileType extends GeneralDbType {
  id: string;
  path: string;
}
export interface CourseType extends GeneralDbType {
  id: number;
  // Step1
  title: string;
  subtitle: string;
  category: categoryType;
  subcategory: subcategoryType;
  topic: string;
  language: languageType;
  subtitleLanguage: languageType[];
  level: CourseLevelEnum;
  duration: number;
  // Step2
  thumbnail: FileType | null;
  trailer: FileType | null;
  description: string | null;
  subjects: string[] | null;
  audience: string[] | null;
  requirements: string[] | null;
  // Step3
  welcomeMessage: string | null;
  congratsMessage: string | null;
  price: number;
  discount: number;
  // Must exist
  instructors: UserType[];
  status: CourseStatusEnum;
}
export interface UserType extends GeneralDbType {
  id: number;
  email: string;
  role: RoleEnum;
  courses: CourseType[];
}
export enum RoleEnum {
  "admin" = 1,
  "user" = 2,
  "instructor" = 3,
}
