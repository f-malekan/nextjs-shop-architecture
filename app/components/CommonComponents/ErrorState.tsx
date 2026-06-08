interface ErrorStateProps {
  title?: string;
  description?: string;
  onRetry?: () => void;
}

const ErrorState = ({
  title = "مشکلی پیش آمد",
  description = "در دریافت اطلاعات خطایی رخ داده است. لطفاً دوباره تلاش کنید.",
  onRetry,
}: ErrorStateProps) => {
  return (
    <div className="flex items-center justify-center py-16">
      <div className="max-w-md w-full text-center bg-(--color-pink-1)/40 border border-(--color-pink-2) rounded-2xl p-8 shadow-sm">

        {/* icon */}
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-(--color-pink-2) text-(--color-text-pink) text-xl">
            !
          </div>
        </div>

        {/* title */}
        <h2 className="text-lg font-semibold text-(--color-text-pink)">
          {title}
        </h2>

        {/* description */}
        <p className="mt-2 text-sm text-(--color-text-pink)/80 leading-relaxed">
          {description}
        </p>

        {/* retry button */}
        {onRetry && (
          <button
            onClick={onRetry}
            className="mt-6 px-5 py-2.5 rounded-lg bg-(--color-dark-green) text-white text-sm hover:opacity-90 transition"
          >
            تلاش مجدد
          </button>
        )}
      </div>
    </div>
  );
};

export default ErrorState;
