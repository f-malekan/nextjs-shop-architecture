import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string[];
  containerClassName?: string;
  disabled?: boolean
}

const BaseInput = ({
  label,
  error,
  containerClassName = "",
  disabled = false,
  className = "",
  ...props
}: Props) => {
  return (
    <div className={`space-y-1.5 ${containerClassName}`}>
      {label && <label className="block text-sm font-semibold text-gray-10">{label}</label>}

      <input
        {...props}
        className={`
          w-full h-11 rounded-xl
          border border-gray-6 bg-white
          p-4 text-sm text-slate-700 placeholder:text-slate-400
          outline-none transition
         focus:border-gray-10
          ${className}
        ${disabled ? ' bg-black' : ""}}
        `}
        disabled = {disabled}
      />

      {error?.map((err) => (
        <span key={err} className="text-sm text-error">
          {err}{". "}
        </span>
      ))}
    </div>
  );
};

export default BaseInput;
