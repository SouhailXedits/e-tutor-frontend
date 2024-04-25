import { type InputHTMLAttributes } from 'react';
import {
  type FieldErrors,
  type FieldValues,
  type Path,
  type UseFormRegister,
} from 'react-hook-form';

export interface Props<
  T extends FieldValues = FieldValues,
  U extends FieldValues = FieldValues
> extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  disabled?: boolean;
  register: UseFormRegister<T>;
  errors?: FieldErrors<U>;
  className?: string;
}

const Input = <T extends FieldValues, U extends FieldValues>({
  disabled = false,
  placeholder,
  errors,
  label,
  name,
  value,
  register,
  className,
  ...rest
}: Props<T, U>) => {
  return (
    <div className={`flex flex-col mb-4 ${className}`}>
      <label className="flex" htmlFor={name}>
        {label ?? ''}
      </label>
      <input
        className="border p-2 w-full"
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        {...register(name as Path<T>)}
        {...rest}
      />
      {errors && errors[name as keyof U] && (
        <span className="text-red-500 text-xs mt-1">
          {errors[name as keyof U]?.message as string}
        </span>
      )}
    </div>
  );
};

export default Input;
