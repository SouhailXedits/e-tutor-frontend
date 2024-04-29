import React from "react";
import Spinner from "modules/shared/components/Spinner";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "gray"
  | "secondaryPrimary"
  | "secondarySecondary"
  | "secondaryGray"
  | "tertiaryPrimary"
  | "tertiarySecondary"
  | "tertiaryGray";

type ButtonSize = "sm" | "md" | "lg" | "xl";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  isLoading?: boolean;
  variant?: ButtonVariant;
  size?: ButtonSize;
  additionnalClasses?: string; // Corrected spelling: 'additionalClasses'
}

const Button: React.FC<ButtonProps> = ({
  text,
  isLoading,
  variant = "primary",
  size = "md",
  additionnalClasses,
  disabled,
  className,
  children,
  ...props
}) => {
  const getVariantClasses = (): string => {
    let variantClasses = "";

    switch (variant) {
      case "primary":
        variantClasses = "text-white bg-primary-500 hover:bg-primary-600";
        break;
      case "secondary":
        variantClasses = "text-white bg-secondary-500 hover:bg-secondary-600";
        break;
      case "gray":
        variantClasses = "text-white bg-gray-900 hover:bg-gray-800";
        break;
      case "secondaryPrimary":
        variantClasses = "bg-primary-100 hover:bg-primary-200 text-primary-500";
        break;
      case "secondarySecondary":
        variantClasses =
          "bg-secondary-100 hover:bg-secondary-200 text-secondary-600";
        break;
      case "secondaryGray":
        variantClasses = "bg-gray-100 hover:bg-gray-200 text-gray-900";
        break;
      case "tertiaryPrimary":
        variantClasses =
          "bg-white hover:bg-primary-100 text-primary-500 hover:text-primary-600";
        break;
      case "tertiarySecondary":
        variantClasses =
          "bg-white hover:bg-secondary-100 text-secondary-500 hover:text-secondary-600";
        break;
      case "tertiaryGray":
        variantClasses =
          "bg-white border border-gray-100 font-semibold text-gray-600 hover:bg-gray-50 text-gray-900";
        break;
      default:
        break;
    }

    return `${variantClasses} font-medium text-sm px-5 py-2.5 text-center min-w-[100px] ${additionnalClasses ?? ""}`;
  };

  const getSizeClasses = (): string => {
    switch (size) {
      case "sm":
        return "px-3 py-1.5 text-sm";
      case "lg":
        return "px-4 py-2.5 text-sm";
      case "xl":
        return "px-10 py-4 text-base";
      default:
        return "px-5 py-2.5 text-sm"; // Default size
    }
  };

  return (
    <button
      type={props?.type ?? "button"}
      className={`${
        className ?? ""
      } ${getVariantClasses()} ${getSizeClasses()} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } whitespace-nowrap`}
      disabled={disabled}
      {...props}
    >
      {isLoading ? <Spinner /> : children ?? text}
    </button>
  );
};

export default Button;
