import { ReactNode } from "react";
interface Props {
  variant?: "primary" | "gray";
  children: ReactNode;
}

const BaseTag = ({ variant = "gray", children }: Props) => {
  const variants = {
    primary: "bg-primary text-white",
    gray: "bg-gray-2 text-black border border-gray-4",
  };

  return (
    <div
      className={`p-2 px-3 text-xs md:px-6 md:text-lg rounded-full transition-all w-max ${variants[variant]}`}
    >{children}</div>
  );
};

export default BaseTag;
