import * as React from "react";
import { cn } from "@/src/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "default",
      size = "default",
      asChild = false,
      ...props
    },
    ref,
  ) => {
    // Manual variant implementation
    let variantClasses = "";
    switch (variant) {
      case "default":
        variantClasses =
          "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] shadow-sm";
        break;
      case "secondary":
        variantClasses =
          "bg-[var(--color-secondary-bg)] text-[var(--color-primary)] hover:bg-[var(--color-surface-dim)]";
        break;
      case "outline":
        variantClasses =
          "border border-[var(--color-primary)] bg-transparent text-[var(--color-primary)] hover:bg-[var(--color-secondary-bg)]";
        break;
      case "ghost":
        variantClasses =
          "hover:bg-[var(--color-secondary-bg)] hover:text-[var(--color-on-surface)] text-[var(--color-on-surface-variant)]";
        break;
      case "link":
        variantClasses =
          "text-[var(--color-primary)] underline-offset-4 hover:underline";
        break;
    }

    let sizeClasses = "";
    switch (size) {
      case "default":
        sizeClasses = "h-10 md:h-11 px-4 md:px-6 py-2";
        break;
      case "sm":
        sizeClasses = "h-8 md:h-9 rounded-md px-3 md:px-4 text-xs md:text-sm";
        break;
      case "lg":
        sizeClasses =
          "h-12 md:h-14 rounded-lg px-6 md:px-8 text-base md:text-lg";
        break;
      case "icon":
        sizeClasses = "h-9 w-9 md:h-10 md:w-10";
        break;
    }

    return (
      <button
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm md:text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          variantClasses,
          sizeClasses,
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button };
