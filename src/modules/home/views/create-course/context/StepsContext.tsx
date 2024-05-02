import { createContext, useContext, useState } from "react";
import { steps } from "../constants/steps";
const StepsContext = createContext({});
type StepsContextType = Partial<{
  currentStep: string;
  setCurrentStep: React.Dispatch<React.SetStateAction<string>>;
}>;
export function StepsContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentStep, setCurrentStep] = useState(steps[0].title);
  return (
    <StepsContext.Provider value={{ currentStep, setCurrentStep }}>
      {children}
    </StepsContext.Provider>
  );
}
export default function useStepsContext() {
  const { currentStep, setCurrentStep } =
    useContext<StepsContextType>(StepsContext);
  const isFirstStep = currentStep === steps[0].title;
  const isLastStep = currentStep === steps[steps.length - 1].title;
  const nextStep = () => {
    setCurrentStep?.(
      (old) => steps[steps.map((e) => e.title).indexOf(old ?? "") + 1].title
    );
  };
  const priviousStep = () => {
    setCurrentStep?.(
      (old) => steps[steps.map((e) => e.title).indexOf(old ?? "") - 1].title
    );
  };
  return { nextStep, priviousStep, currentStep, isFirstStep, isLastStep };
}
