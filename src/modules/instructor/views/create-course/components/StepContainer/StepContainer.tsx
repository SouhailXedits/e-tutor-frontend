import React from "react";
import Button from "modules/shared/components/Button";
import { steps } from "../../constants/steps";
import useStepsContext from "../../context/StepsContext";

function StepContainer({
  children,
  onNext,
  onBack,
  isPending,
}: {
  children: React.ReactNode;
  onNext?: () => void;
  onBack?: () => void;
  isPending?: boolean;
}) {
  const { currentStep, priviousStep, isFirstStep, isLastStep } =
    useStepsContext();
  return (
    <div className="flex flex-col px-6 py-4 w-full h-full gap-2 justify-between">
      <div className="flex flex-row items-center justify-between">
        <span className="text-xl font-bold">
          {steps.find((e) => e.title === currentStep)?.title}
        </span>
        <div className="flex flex-row items-center gap-1">
          <Button variant="tertiaryPrimary" size="md">
            Save
          </Button>
          <Button variant="tertiaryPrimary" size="md">
            Save & Preview
          </Button>
        </div>
      </div>
      {children}
      <div className="flex flex-row items-center justify-between">
        <Button
          type="button"
          onClick={() => {
            onBack?.();
            !isFirstStep && priviousStep();
          }}
          className="capitalize"
          variant="secondaryGray"
          size="md"
        >
          {isFirstStep ? "cancel" : "previous"}
        </Button>
        <Button
          isLoading={isPending}
          type="submit"
          className="capitalize"
          onClick={() => {
            onNext?.();
          }}
        >
          {isLastStep ? "submit for review" : "save & next"}
        </Button>
      </div>
    </div>
  );
}

export default StepContainer;