import type { Metadata } from "next";
import DashboardStatCard from "../components/dashboard/DashboardStatsCard";

export const metadata: Metadata = {
  title: "پیشخوان | داشبورد",
  robots: {
    index: false,
    follow: false,
  },
};

const DashboardPage = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <header className="flex items-center justify-between">
        <div>
          <p className="mt-1 text-gray-500">خلاصه وضعیت حساب شما در تانا</p>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <DashboardStatCard label="سفارش‌های فعال" value="۰۲" />
        <DashboardStatCard
          label="مجموع خریدها"
          value="۱۲,۵۰۰,۰۰۰"
          unit="تومان"
        />
      </div>

      <section className="rounded-2xl bg-white p-12 shadow-sm border border-gray-50">
        <div className="mb-8 flex items-center justify-between">
          <h3 className="text-xl font-bold text-(--color-dark-green)">
            آخرین سفارش‌ها
          </h3>
          <button className="text-sm font-bold text-(--color-dark-green) opacity-60 hover:opacity-100">
            مشاهده همه
          </button>
        </div>

        <div className="flex flex-col items-center justify-center py-20 text-center">
          <p className="max-w-50 text-gray-400 leading-relaxed">
            هنوز سفارشی ثبت نکردی، وقتش نیست اولین خریدت رو انجام بدی؟
          </p>
          <button className="mt-8 rounded-full bg-(--color-dark-green) px-8 py-3 text-sm font-bold text-white shadow-lg transition-transform hover:scale-105">
            رفتن به فروشگاه
          </button>
        </div>
      </section>
    </div>
  );
};

export default DashboardPage;
