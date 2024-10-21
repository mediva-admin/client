import React, { forwardRef, ComponentProps } from 'react';

const Input = forwardRef<HTMLInputElement, ComponentProps<'input'>>(
  ({ className = "", ...props }, ref) => {
    return (
      <input
        className={`h-10 w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:ring-2 focus:ring-emerald-500 ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
