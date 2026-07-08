import { ReactNode } from "react";
import { IoIosInformationCircle } from "react-icons/io";

interface Props {
  variant: "success" | "error" | "info";
  children: ReactNode;
}

const BaseMessage = ({ variant = "error", children }: Props) => {
  const className = {
    error: "text-error bg-error-tint-1",
    success: "text-success bg-success-tint-1",
    info: "text-gray-10 bg-gray-2",
  };
  return (
    <div
      className={`py-1 px-4 flex gap-2 items-center rounded-xl text-sm ${className[variant]}`}
    >
      <IoIosInformationCircle size="20"/>
      <span> {children}</span>
    </div>
  );
};

export default BaseMessage;
