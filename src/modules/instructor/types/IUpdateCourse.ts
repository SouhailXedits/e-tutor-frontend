import type { IBasicInformationFormData } from "./IBasicInformationFormData";

export interface IUpdateCourse extends IBasicInformationFormData {
  // Step2
  thumbnail: string;
  trailer: string;
  description: JSON;
  subjects: string[];
  audience: string[];
  requirements: string[];
  // Step3
  welcomeMessage: string;
  congratsMessage: string;
  price: number;
  discount: number;
  // Must exist
  instructors: number[];
}
