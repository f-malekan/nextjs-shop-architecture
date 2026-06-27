import BaseButton from "./components/BaseComponents/BaseButton";

const NotFound = () => {
  return (
    <div className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden px-4 text-center">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary-tint-1 to-background" />
      <div className="absolute -z-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

      <div className="rounded-3xl border border-gray-4 bg-background/90 px-6 py-10 shadow-sm backdrop-blur-sm md:px-10">
        <div className="relative mx-auto flex h-28 w-28 items-center justify-center">
          <span className="text-8xl font-black leading-none text-primary-shade-4">
            404
          </span>
          <span className="absolute -bottom-1 rounded-full bg-primary-tint-1 px-3 py-1 text-sm font-bold text-primary-shade-4">
            صفحه پیدا نشد
          </span>
        </div>

        <h1 className="mt-8 text-2xl font-bold text-gray-11 md:text-3xl">
          این صفحه هنوز ساخته نشده یا جابه‌جا شده
        </h1>

        <p className="mt-3 text-sm leading-7 text-gray-10 md:text-base">
          آدرس را بررسی کن یا از دکمه زیر به صفحه اصلی برگرد.
        </p>

        <div className="mt-8">
          <BaseButton
            href="/"
            variant="primary"
            className="inline-flex items-center gap-2 px-8 py-3"
          >
            برگشت به خانه
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5 transition-transform group-hover:-translate-x-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </BaseButton>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
