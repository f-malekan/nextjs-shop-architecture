import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string[];
  containerClassName?: string;
  disabled?: boolean;
}

const BaseCheckBox = ({
  label,
  error,
  containerClassName = "",
  disabled = false,
  className = "",
  ...props
}: Props) => {
  return (
    <div className={`py-5 flex gap-2 ${containerClassName}`}>
      {label && (
        <label className="block text-sm font-semibold text-gray-10">
          {label}
        </label>
      )}

      <input
        {...props}
        className={`
          ${className}
        `}
        disabled={disabled}
        type="checkbox"
      />

      {error?.map((err) => (
        <span key={err} className="text-sm text-error">
          {err}
          {". "}
        </span>
      ))}
    </div>
  );
};

export default BaseCheckBox;
