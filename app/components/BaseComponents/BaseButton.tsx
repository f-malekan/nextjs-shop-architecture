import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "dark";
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
}

const BaseButton = ({
  href,
  onClick,
  variant = "primary",
  children,
  type = "button",
  className = "",
  disabled = false,
}: Props) => {
  const baseStyles =
    "inline-flex items-center justify-center px-4 py-2 h-10 rounded-lg text-sm font-medium transition-colors duration-200";

  const variantStyles = {
    primary: "bg-[#184025] text-white hover:bg-[#0f2a19]",
    secondary: "border-2 border-[#184025] text-[#184025] hover:bg-[#184025]/10",
    dark: "bg-black text-white hover:bg-neutral-800",
  };

  const classes = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
};

export default BaseButton;
