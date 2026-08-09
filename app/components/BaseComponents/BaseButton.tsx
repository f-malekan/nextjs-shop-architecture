import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  href?: string;
  onClick?: () => void;
  variant?:
    | "primary"
    | "secondary"
    | "dark"
    | "danger"
    | "white"
    | "ghost"
    | "ghost-primary";
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  loading?: boolean;
}

const BaseButton = ({
  href,
  onClick,
  variant = "primary",
  children,
  type = "button",
  className = "",
  disabled = false,
  loading = false,
}: Props) => {
  const isDisabled = disabled || loading;

  const baseStyles =
    "inline-flex items-center justify-center gap-2 px-4 py-2 h-10 rounded-lg text-sm text-nowrap font-medium transition-all duration-200 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2";

  const variantStyles = {
    primary:
      "bg-primary text-white hover:bg-primary-shade-1 active:bg-primary-shade-4",
    secondary:
      "border border-primary text-primary bg-transparent hover:bg-primary-tint-1 active:bg-primary-tint-1/80",
    dark: "bg-black text-white hover:bg-gray-11 active:bg-gray-10",
    danger:
      "bg-error text-white hover:brightness-95 active:brightness-90 focus-visible:ring-error",
    white:
      "bg-white border border-gray-4 text-gray-10 hover:bg-gray-2 active:bg-gray-4",
    ghost: "bg-transparent text-gray-10 hover:bg-gray-2 active:bg-gray-4",
    "ghost-primary":
      "bg-transparent text-primary hover:bg-primary-tint-1 active:bg-primary-tint-1/80",
  };

  const stateStyles = isDisabled
    ? "opacity-50 pointer-events-none cursor-not-allowed"
    : "cursor-pointer";

  const classes = `${baseStyles} ${variantStyles[variant]} ${stateStyles} ${className}`;

  const content = loading ? (
    <>
      <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      <span>در حال پردازش...</span>
    </>
  ) : (
    children
  );

  if (href && !isDisabled) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  if (href && isDisabled) {
    return <span className={classes}>{content}</span>;
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      className={classes}
    >
      {content}
    </button>
  );
};

export default BaseButton;
