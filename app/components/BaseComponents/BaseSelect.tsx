import { SelectHTMLAttributes } from "react";

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  containerClassName?: string;
}

const BaseSelect = ({
  label,
  error,
  containerClassName = "",
  className = "",
  children,
  ...props
}: Props) => {
  return (
    <div className={`space-y-1.5 ${containerClassName}`}>
      {label && (
        <label className="block text-sm font-semibold text-[#184025]">
          {label}
        </label>
      )}

      <select
        {...props}
        className={`
          w-full p-3 rounded-xl
          border bg-white
          text-sm text-slate-700
          outline-none transition
          ${
            error
              ? "border-red-500 focus:ring-2 focus:ring-red-200"
              : "border-emerald-200 focus:border-[#84B095] focus:ring-4 focus:ring-[#C3EFD4]"
          }
          ${className}
        `}
      >
        {children}
      </select>

      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default BaseSelect;
