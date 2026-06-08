import BaseButton from "./components/BaseComponents/BaseButton";

const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-9xl font-extrabold text-green-100 relative">
        404
        <span className="absolute inset-0 flex items-center justify-center text-4xl text-slate-800 font-bold mt-4">
          گم شدی؟
        </span>
      </h1>

      <div className="mt-8">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          صفحه‌ای که دنبالش بودی رو پیدا نکردیم!
        </h2>
        <p className="text-slate-500 max-w-md mx-auto leading-loose">
          ظاهراً این آدرس وجود نداره یا شاید هم به استایل ما نمی‌خورد و حذفش
          کردیم. 😉 نگران نباش، می‌تونی از دکمه زیر به دنیای محصولات برگردی.
        </p>
      </div>

      <div className="mt-10">
        <BaseButton
          href="/"
          variant="primary"
          className="px-8 py-3 flex items-center gap-2 group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 transition-transform group-hover:-translate-x-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          برگشت به خانه
        </BaseButton>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-64 h-64 bg-green-50 rounded-full blur-3xl opacity-50"></div>
    </div>
  );
};

export default NotFound;
