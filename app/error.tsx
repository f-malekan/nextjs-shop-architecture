"use client";

import BaseButton from "./components/BaseComponents/BaseButton";

type Props = {
  reset: () => void;
};

export default function Error({ reset }: Props) {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-4 text-center">
      <div className="w-full max-w-sm rounded-3xl border border-gray-4 bg-primary-tint-1 p-8 shadow-sm">
        <h2 className="text-xl font-bold text-error">
          خطای غیرمنتظره
        </h2>

        <p className="mt-3 text-sm leading-7 text-gray-10">
          متأسفانه در بارگذاری این صفحه خطایی رخ داده است. لطفاً دوباره تلاش کنید.
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
  );
}
