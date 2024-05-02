import React from "react";
import { StepsSwitcher } from "./components/StepsSwitcher/StepsSwitcher";
import { StepsContextProvider } from "./context/StepsContext";

export default function CreateCourse() {
  return (
    <StepsContextProvider>
      <div className="bg-gray-50 h-full px-4 pt-4 overflow-y-auto">
        <StepsSwitcher />
      </div>
    </StepsContextProvider>
  );
}
