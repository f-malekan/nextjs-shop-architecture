import Link from "next/link";
import type { ReactNode } from "react";

type EmptyStateProps = {
  title: string;
  description?: string;
  icon?: ReactNode;
  actionLabel?: string;
  actionHref?: string;
  variant?: "default" | "compact";
  className?: string;
};

const EmptyState = ({
  title,
  description,
  icon,
  actionLabel,
  actionHref,
  variant = "default",
  className = "",
}: EmptyStateProps) => {
  
  if (variant === "compact") {
    return (
      <div className={`py-10 text-center ${className}`}>
        <p className="font-medium text-gray-11">{title}</p>
        {description && (
          <p className="mt-1 text-xs text-gray-6">{description}</p>
        )}
      </div>
    );
  }

  return (
    <div
      className={`flex flex-col items-center justify-center rounded-2xl border border-gray-4 bg-white px-6 py-16 text-center shadow-sm ${className}`}
    >
      {icon && (
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-tint-1 text-primary">
          {icon}
        </div>
      )}

      <h3 className="text-lg font-bold text-gray-13">{title}</h3>

      {description && (
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-gray-10">
          {description}
        </p>
      )}

      {actionLabel && actionHref && (
        <Link
          href={actionHref}
          className="mt-8 rounded bg-primary px-10 py-3 text-sm font-bold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary-shade-1 hover:scale-105 active:scale-95"
        >
          {actionLabel}
        </Link>
      )}
    </div>
  );
};

export default EmptyState;
