import { type InputHTMLAttributes } from "react";
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
}

const Input = <T extends FieldValues, U extends FieldValues>({
  disabled = false,
  placeholder,
  errors,
  label,
  name,
  value,
  register,
  registerOptions,
  className,
  containerClassName,
  required,
  ...rest
}: Props<T, U>) => {
  return (
    <div
      className={cn(`flex flex-col mb-2 gap-1 relative`, containerClassName)}
    >
      <label className="flex text-sm" htmlFor={name}>
        {label ?? ""}
      </label>
      <input
        className={cn(
          "border p-2 h-11 w-full transition duration-300 ease-in-out rounded-sm placeholder:text-gray-500 pl-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50",
          className
        )}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        {...rest}
        {...register(name as Path<T>, {
          ...(registerOptions ?? {}),
          required: required && "This field is required.",
        })}
      />
      {errors && errors[name as keyof U] && (
        <span className="text-red-500 text-xs mt-1 absolute -bottom-5">
          {errors[name as keyof U]?.message as string}
        </span>
      )}
    </div>
  );
};

export default Input;
