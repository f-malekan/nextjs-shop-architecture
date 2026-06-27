"use client";

import BaseButton from "./components/BaseComponents/BaseButton";

type Props = {
  reset: () => void;
};

export default function GlobalError({ reset }: Readonly<Props>) {
  return (
    <html lang="fa">
      <body>
        <div className="flex min-h-screen items-center justify-center bg-primary-tint-1 px-4 text-center">
          <div className="w-full max-w-md rounded-3xl border border-gray-4 bg-background p-8 shadow-sm">
            <h1 className="text-2xl font-bold text-error">خطای غیرمنتظره</h1>

            <p className="mt-3 text-sm leading-7 text-gray-10">
              مشکلی در سیستم رخ داده است. لطفاً چند لحظه دیگر دوباره تلاش کنید.
            </p>

            <div className="mt-8">
              <BaseButton
                onClick={() => reset()}
                variant="primary"
                className="w-full justify-center"
              >
                تلاش مجدد
              </BaseButton>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
