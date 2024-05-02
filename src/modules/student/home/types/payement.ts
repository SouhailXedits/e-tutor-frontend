import { ICourse } from "./course";

export interface IPayementBody {
    courses: ICourseID[];
}
export interface ICourseID {
    id: number;
}