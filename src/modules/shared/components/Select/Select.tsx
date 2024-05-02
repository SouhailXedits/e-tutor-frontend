import React, {
  type Dispatch,
  type ReactNode,
  type SetStateAction,
  useState,
} from "react";
import {
  type FieldErrors,
  type FieldValues,
  type Path,
  type RegisterOptions,
  type UseFormRegister,
} from "react-hook-form";
import { VscTriangleDown } from "react-icons/vsc";
import { FormControl, MenuItem, Select as MuiSelect } from "@mui/material";
import { cn } from "lib/utils";
export type Option = {
  label: string | ReactNode;
  value: string | number;
  disabled?: boolean;
};
export default function Select<T extends FieldValues, U extends FieldValues>({
  className,
  containerClassName,
  label,
  error,
  name = "select",
  defaultValue,
  options,
  required,
  capitalize,
  inputLabel,
  errors,
  setValueInParent,
  register,
  registerOptions,
}: {
  className?: string;
  containerClassName?: string;
  label?: string;
  name?: string;
  error?: boolean;
  defaultValue?: Option;
  options: Option[] | undefined | null;
  required?: boolean;
  capitalize?: boolean;
  inputLabel?: string | ReactNode;
  disabled?: boolean;
  errors?: FieldErrors<U>;
  setValueInParent?: Dispatch<SetStateAction<any>>;
  register: UseFormRegister<T>;
  registerOptions?: RegisterOptions<T>;
}) {
  const [open, setOpen] = useState(false);
  if (!options) return;
  return (
    <FormControl
      className={cn("group flex w-full flex-col gap-1 ", containerClassName)}
    >
      <label className="flex text-sm" htmlFor={label}>
        {label ?? ""}
      </label>
      <div className="relative flex flex-row items-center justify-center gap-1.5">
        <MuiSelect
          variant="outlined"
          data-placeholder-trigger="keydown"
          label={label}
          id={label}
          className={cn(
            `group peer h-11 w-full border py-1 transition-all ease-linear first-letter:capitalize [&_.Mui-selected]:!bg-primary-500 [&_.MuiOutlinedInput-notchedOutline]:border-none ${open ? "rounded-b-none rounded-t-sm " : "rounded-sm shadow-sm hover:shadow-md"} ${error ? "border-danger-500" : ""}`,
            className
          )}
          open={open}
          defaultValue={defaultValue ? String(defaultValue.value) : ""}
          displayEmpty
          onOpen={() => {
            setOpen(true);
          }}
          onClose={() => {
            setOpen(false);
          }}
          IconComponent={() => (
            <VscTriangleDown
              className={`cursor-pointer transition-all ease-linear text-gray-900 rounded-br-sm !min-w-8 rounded-tr-sm  px-2.5 h-full  ${open ? "rotate-180" : ""} `}
              onClick={() => {
                setOpen((old) => !old);
              }}
            />
          )}
          {...register(name as Path<T>, {
            ...(registerOptions ?? {}),
            required: required && "This field is required.",
          })}
          onChange={(e) => {
            setValueInParent?.(e.target.value as Option["value"]);
          }}
        >
          {options?.map((option, i) => {
            return (
              <MenuItem
                value={option?.value}
                className={`peer  text-gray-900 transition-all  ease-linear first-letter:capitalize hover:!bg-primary-500 hover:text-white ${capitalize ? "capitalize" : ""} `}
                key={name + String(i)}
                disabled={option?.disabled}
              >
                {option?.label}
              </MenuItem>
            );
          })}
          {inputLabel && (
            <MenuItem
              value=""
              className="peer invisible !hidden !text-gray-500 first-letter:capitalize"
              disabled
            >
              {inputLabel}
            </MenuItem>
          )}
        </MuiSelect>
        {errors && errors[name as keyof U] && (
          <span className="text-red-500 text-xs mt-1 absolute -bottom-5 left-0">
            {errors[name as keyof U]?.message as string}
          </span>
        )}
      </div>
    </FormControl>
  );
}
