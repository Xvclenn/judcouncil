import React from "react";
import { IconType } from "react-icons";

interface ButtonProps {
    label: string;
    onClick: () => void;
    icon?: IconType;
    iconPosition?: "left" | "right";
    variant?: "primary" | "secondary" | "danger" | "outline" | "text";
    size?: "small" | "medium" | "large";
    disabled?: boolean;
    fullWidth?: boolean;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    icon: Icon,
    iconPosition = "right",
    variant = "",
    size = "medium",
    disabled = false,
    fullWidth = false,
    className = "",
}) => {
    // Base styles
    let baseStyles =
        "inline-flex items-center justify-center font-semibold rounded focus:outline-none transition ease-in-out duration-150";

    // Variants
    let variantStyles;
    switch (variant) {
        case "primary":
            variantStyles = "bg-blue-500 text-white hover:bg-blue-600";
            break;
        case "secondary":
            variantStyles = "bg-gray-500 text-white hover:bg-gray-600";
            break;
        case "danger":
            variantStyles = "bg-red-500 text-white hover:bg-red-600";
            break;
        case "outline":
            variantStyles =
                "border border-gray-500 text-gray-500 hover:bg-gray-100";
            break;
        case "text":
            variantStyles = "bg-transparent text-blue-500 hover:bg-blue-50";
            break;
        default:
            variantStyles = "";
            break;
    }

    // Size
    let sizeStyles;
    switch (size) {
        case "small":
            sizeStyles = "text-sm py-1 px-2";
            break;
        case "medium":
            sizeStyles = "text-md py-2 px-4";
            break;
        case "large":
            sizeStyles = "text-lg py-3 px-6";
            break;
        default:
            sizeStyles = "";
            break;
    }

    // Disabled
    const disabledStyles = disabled ? "opacity-50 cursor-not-allowed" : "";

    // Full width
    const fullWidthStyles = fullWidth ? "w-full" : "";

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`${baseStyles} ${variantStyles} ${sizeStyles} ${disabledStyles} ${fullWidthStyles} ${className}`}
        >
            {Icon && iconPosition === "left" && <Icon className="mr-2" />}
            {label}
            {Icon && iconPosition === "right" && <Icon className="ml-2" />}
        </button>
    );
};

export default Button;
