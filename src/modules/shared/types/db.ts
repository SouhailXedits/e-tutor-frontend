export interface GeneralDbType {
  id: number;
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
