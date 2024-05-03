import { useEffect, useState } from "react";
import {
  type FieldErrors,
  type FieldValues,
  type UseFormRegister,
} from "react-hook-form";
import Button from "modules/shared/components/Button";
import Input from "modules/shared/components/Input";
export function Question<T extends FieldValues, U extends FieldValues>({
  question,
  name,
  placeholder,
  register,
  errors,
  defaultValues,
}: {
  question: string;
  name: string;
  placeholder: string;
  register: UseFormRegister<T>;
  errors?: FieldErrors<U>;
  defaultValues?: string[] | null;
}) {
  const [possibleAnswersCount, setPossibleAnswersCount] = useState<number>(
    defaultValues?.length ?? 4
  );
  useEffect(() => {
    if (defaultValues && defaultValues?.length !== possibleAnswersCount) {
      setPossibleAnswersCount(defaultValues.length);
    }
  }, [defaultValues?.length]);
  // increment possible answers count
  const incrementPossibleAnswersCount = () => {
    setPossibleAnswersCount((prev) => (prev === 8 ? prev : prev + 1));
  };
  return (
    <div className="flex flex-col gap-2 border-b mb-4">
      <div className="flex flex-row items-center justify-between">
        <span>
          {question}
          {` ( ${possibleAnswersCount}/8 ) `}
        </span>
        <Button
          size="sm"
          variant="tertiaryPrimary"
          onClick={() => {
            incrementPossibleAnswersCount();
          }}
        >
          + Add new
        </Button>
      </div>
      <div className="flex flex-col gap-4">
        {[...Array(possibleAnswersCount)].map((_, i) => (
          <Input
            key={name + String(i)}
            label={`0${i + 1}`}
            className="h-12"
            name={name + String(i)}
            defaultValue={defaultValues?.[i] ?? ""}
            placeholder={placeholder}
            register={register}
            errors={errors}
            required
            showWordsCount
          />
        ))}
      </div>
    </div>
  );
}
