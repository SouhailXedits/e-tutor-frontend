import { steps } from "../constants/steps";

export function findNextStep(currentStep: string) {
  return steps[steps.map((e) => e.title).indexOf(currentStep ?? "") + 1].title;
}
