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
        <label className="block text-sm font-semibold text-gray-10">
          {label}
        </label>
      )}

      <select
        {...props}
        className={`
          w-full p-3 rounded-xl
          border border-gray-6 bg-white
          text-sm  text-slate-700 placeholder:text-slate-400
          outline-none transition
         focus:border-gray-10
          ${
            error
              ? "border-red-500 focus:ring-2 focus:ring-red-200"
              : ""
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
