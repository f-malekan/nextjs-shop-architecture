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
      <div className="max-w-md w-full text-center  border rounded-2xl p-8 shadow-sm">
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 flex items-center justify-center rounded-full text-xl">
            !
          </div>
        </div>

        <h2 className="text-lg font-semibold ">{title}</h2>

        <p className="mt-2 text-sm leading-relaxed">{description}</p>

        {onRetry && (
          <button
            onClick={onRetry}
            className="mt-6 px-5 py-2.5 rounded-lg text-white text-sm hover:opacity-90 transition"
          >
            تلاش مجدد
          </button>
        )}
      </div>
    </div>
  );
};

export default ErrorState;
