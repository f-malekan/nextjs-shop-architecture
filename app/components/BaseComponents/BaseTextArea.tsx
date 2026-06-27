import { TextareaHTMLAttributes } from "react";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  containerClassName?: string;
}

const BaseTextarea = ({
  label,
  error,
  containerClassName = "",
  className = "",
  ...props
}: Props) => {
  return (
    <div className={`space-y-1.5 ${containerClassName}`}>
      {label && (
        <label className="block text-sm font-semibold text-gray-10">
          {label}
        </label>
      )}

      <textarea
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
      />

      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default BaseTextarea;
