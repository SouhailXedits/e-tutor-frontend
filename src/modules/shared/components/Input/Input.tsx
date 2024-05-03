import { type InputHTMLAttributes, useEffect, useState } from "react";
import {
  type FieldErrors,
  type FieldValues,
  type Path,
  type RegisterOptions,
  type UseFormRegister,
} from "react-hook-form";
import { cn } from "lib/utils";

export interface Props<
  T extends FieldValues = FieldValues,
  U extends FieldValues = FieldValues,
> extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  disabled?: boolean;
  register: UseFormRegister<T>;
  registerOptions?: RegisterOptions<T>;
  errors?: FieldErrors<U>;
  className?: string;
  containerClassName?: string;
  required?: boolean;
  showWordsCount?: boolean;
}

const Input = <T extends FieldValues, U extends FieldValues>({
  disabled = false,
  placeholder,
  errors,
  label,
  name,
  register,
  registerOptions,
  className,
  containerClassName,
  required,
  defaultValue,
  showWordsCount = false,
  ...rest
}: Props<T, U>) => {
  const [wordsCount, setWordsCount] = useState<number>(0);
  const [value, setValue] = useState<typeof defaultValue>("");
  useEffect(() => {
    if (defaultValue && defaultValue !== value) {
      setWordsCount(String(defaultValue).length);
      setValue(defaultValue);
    }
  }, [defaultValue]);
  return (
    <div
      className={cn(`flex relative flex-col mb-2 gap-1`, containerClassName)}
    >
      <label className="flex text-sm" htmlFor={name}>
        {label ?? ""}
      </label>
      <input
        className={cn(
          "border p-2 h-11 w-full transition duration-300 ease-in-out rounded-sm placeholder:text-gray-500 pl-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50",
          className
        )}
        maxLength={120}
        placeholder={placeholder}
        disabled={disabled}
        {...rest}
        {...register(name as Path<T>, {
          ...(registerOptions ?? {}),
          required: required && "This field is required.",
          onChange: (e) => {
            setWordsCount(e.target.value.length);
            setValue(e.target.value);
          },
        })}
        value={value}
      />
      {showWordsCount && (
        <span className="absolute top-[42.5%] text-sm right-3">
          {wordsCount} / 120
        </span>
      )}
      {errors && errors[name as keyof U] && (
        <span className="text-red-500 text-xs mt-1 absolute top-[100%] left-0">
          {(errors[name as keyof U]?.message as string) ??
            // @ts-expect-error - it works perfectly
            (errors[name as keyof U] as string)}
        </span>
      )}
    </div>
  );
};

export default Input;
