import { FaCheckDouble } from "react-icons/fa6";
import { steps } from "../../constants/steps";
import useStepsContext from "../../context/StepsContext";

export function StepsSwitcher() {
  const { currentStep, cuurentStepIndex } = useStepsContext();
  return (
    <main className="max-w-[82.5rem] w-full h-fit bg-white mx-auto mt-8 mb-20">
      <div className="flex flex-row items-center justify-between w-full">
        {steps.map((step, i) => (
          <div
            key={step.title}
            className={`flex flex-row justify-center  transition-all ease-linear pt-4 pb-2 px-4 cursor-pointer border-b-2 text-center w-full gap-2 items-center text-lg ${currentStep === step.title ? "text-gray-900 border-b-[2px] border-primary-500" : " text-gray-600"}`}
          >
            <span
              className={`${currentStep === step.title ? "text-primary-500 h-5 w-5" : ""}`}
            >
              {step.icon}
            </span>
            <span>{step.title}</span>
            {i < cuurentStepIndex && (
              <FaCheckDouble className="text-success-500 size-4 ml-4" />
            )}
          </div>
        ))}
      </div>
      {steps.find((step) => step.title === currentStep)?.component}
    </main>
  );
}
