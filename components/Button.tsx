import React from "react";
import clsx from "clsx";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "primary" | "outline";
  className?: string;
}

export default function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className,
}: ButtonProps) {
  const baseStyles =
    "px-6 py-3 rounded-xl font-semibold transition-all duration-200 text-sm tracking-wide";

  const variants = {
    primary:
      "bg-gold text-dark shadow-sm hover:shadow-md hover:bg-gold/90",
    outline:
      "border border-gold text-gold hover:bg-gold hover:text-dark shadow-sm",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(baseStyles, variants[variant], className)}
    >
      {children}
    </button>
  );
}
