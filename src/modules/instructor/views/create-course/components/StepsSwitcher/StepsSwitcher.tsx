import React from "react";
import { steps } from "../../constants/steps";
import useStepsContext from "../../context/StepsContext";

export function StepsSwitcher() {
  const { currentStep, setCurrentStep } = useStepsContext();
  return (
    <main className="max-w-[82.5rem] w-full h-fit bg-white mx-auto mt-8 mb-20">
      <div className="flex flex-row items-center justify-between w-full">
        {steps.map((step) => (
          <div
            key={step.title}
            className={`flex flex-row justify-center transition-all ease-linear pt-4 pb-2 px-4 cursor-pointer border-b-2 text-center w-full gap-2 items-center text-lg ${currentStep === step.title ? "text-gray-900 border-b-[2px] border-primary-500" : " text-gray-600"}`}
            onClick={() => {
              setCurrentStep?.(step.title);
            }}
          >
            <span className="">{step.icon}</span>
            <span>{step.title}</span>
          </div>
        ))}
      </div>
      {steps.find((step) => step.title === currentStep)?.component}
    </main>
  );
}
