import { type CourseType } from "modules/shared/types/db";

export interface IPayementBody {
  courses: ICourseID[];
}

export interface IConfirmPayementBody {
  paymentIntentId: string;
  card: any;
}
export interface ICourseID {
  id: CourseType["id"];
}
