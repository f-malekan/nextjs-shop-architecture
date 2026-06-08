import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string[];
  containerClassName?: string;
}

const BaseInput = ({
  label,
  error,
  containerClassName = "",
  className = "",
  ...props
}: Props) => {
  return (
    <div className={`space-y-1.5 ${containerClassName}`}>
      {label && (
        <label className="block text-sm font-semibold text-[#184025]">
          {label}
        </label>
      )}

      <input
        {...props}
        className={`
          w-full h-11 rounded-xl
          border border-emerald-200 bg-white
          px-4 text-sm text-slate-700 placeholder:text-slate-400
          outline-none transition
          focus:border-[#84B095] focus:ring-4 focus:ring-[#C3EFD4]
          ${className}
        `}
      />

      {error?.map((err) => (
        <p key={err} className="text-sm text-red-600">
          {err}
        </p>
      ))}
    </div>
  );
};

export default BaseInput;
