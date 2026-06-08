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
      <div
        className={`py-10 text-center text-sm text-(--color-text-pink) ${className}`}
      >
        <p className="font-medium">{title}</p>
        {description && (
          <p className="mt-1 text-xs text-(--color-text-pink)/70">{description}</p>
        )}
      </div>
    );
  }

  return (
    <div
      className={`flex flex-col items-center justify-center rounded-2xl border border-(--color-green-2) bg-white px-6 py-16 text-center shadow-sm ${className}`}
    >
      {icon && (
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-(--color-green-1) text-(--color-dark-green)">
          {icon}
        </div>
      )}

      <h3 className="text-base font-bold text-(--color-text-green)">{title}</h3>

      {description && (
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-(--color-text-pink)">
          {description}
        </p>
      )}

      {actionLabel && actionHref && (
        <Link
          href={actionHref}
          className="mt-6 rounded-full bg-(--color-dark-green) px-8 py-3 text-sm font-bold text-white shadow-lg shadow-(--color-dark-green)/20 transition-transform hover:scale-105"
        >
          {actionLabel}
        </Link>
      )}
    </div>
  );
};

export default EmptyState;
