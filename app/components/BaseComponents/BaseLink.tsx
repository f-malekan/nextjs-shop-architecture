import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  href: string;
  variant?: "primary";
  children: ReactNode;
  className?: string
}
const BaseLink = ({ href, variant = "primary", children, className }: Props) => {
  const variants = {
    primary: "bg-primary text-white",
    secondary: "bg-secondary text-gray-800",
    neutral: "bg-neutral-200 text-black",
  };

  return (
    <div className={`p-2 px-6 rounded-lg transition-all w-max ${variants[variant]} ${className}`}>
      <Link href={href}>{children}</Link>
    </div>
  );
};

export default BaseLink;
