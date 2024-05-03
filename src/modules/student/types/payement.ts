import { type CourseType } from "modules/shared/types/db";

export interface IPayementBody {
  courses: ICourseID[];
}
export interface ICourseID {
  id: CourseType["id"];
}
