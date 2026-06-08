"use client";

type Props = {
  error: Error;
  reset: () => void;
};

export default function GlobalError({ error, reset }: Props) {
  return (
    <html lang="fa">
      <body>

        <div className="min-h-screen flex items-center justify-center text-center">

          <div className="max-w-md">

            <h1 className="text-2xl font-bold text-(--color-text-pink)">
              خطای غیرمنتظره
            </h1>

            <p className="mt-3 text-gray-600">
              مشکلی در سیستم رخ داده است. لطفاً دوباره تلاش کنید.
            </p>

            <button
              onClick={() => reset()}
              className="mt-6 px-5 py-2 rounded-lg bg-(--color-dark-green) text-white"
            >
              تلاش مجدد
            </button>

          </div>

        </div>

      </body>
    </html>
  );
}
