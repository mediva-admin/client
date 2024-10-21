import React, { forwardRef, ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  variant?: "default" | "outline";
  size?: "default" | "sm";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = "default", size = "default", className = "", ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background whitespace-nowrap";
    
    const variantStyles = {
      default: "bg-emerald-500 text-white hover:bg-emerald-600",
      outline: "border border-gray-300 text-gray-700 hover:bg-gray-50",
    };

    const sizeStyles = {
      default: "h-10 py-2 px-4",
      sm: "h-9 px-3 rounded-md text-sm",
    };

    return (
      <button
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
