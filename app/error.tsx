"use client";

type Props = {
  error: Error;
  reset: () => void;
};

export default function Error({ error, reset }: Props) {
  return (
    <div className="container py-20 text-center">
      <h2 className="text-xl font-semibold text-(--color-text-pink)">
        مشکلی پیش آمد
      </h2>

      <p className="mt-3 text-sm text-gray-600">
        متأسفانه در بارگذاری این صفحه خطایی رخ داده است.
      </p>

      <button
        onClick={() => reset()}
        className="mt-6 px-5 py-2 rounded-lg bg-(--color-dark-green) text-white"
      >
        تلاش مجدد
      </button>
    </div>
  );
}
