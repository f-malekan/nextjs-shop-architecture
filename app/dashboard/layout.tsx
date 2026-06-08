import NavItem from "../components/HeaderComponents/NavItem";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen p-4 md:p-8 rtl bg-[#fbfbfb]">
      <div className="mx-auto flex max-w-350 gap-8">
        <aside className="hidden w-80 shrink-0 md:block">
          <div className="sticky top-8 h-[calc(100vh-64px)] rounded-xl p-10 shadow-sm borde bg-(--color-green-2)">
            <div className="mb-12">
              <h2 className="text-xl font-black tracking-tight">پنل کاربری</h2>
              <div className="mt-2 h-1 w-8 rounded-full" />
            </div>

            <nav className="flex flex-col gap-3">
              <NavItem href="/dashboard" label="پیشخوان" active />
              <NavItem href="/dashboard/orders" label="سفارش‌های من" />
              <NavItem href="/dashboard/profile" label="اطلاعات حساب" />
              <div className="my-6 h-px bg-gray-50" />
              <NavItem href="/logout" label="خروج از حساب" isExit />
            </nav>
          </div>
        </aside>

        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;