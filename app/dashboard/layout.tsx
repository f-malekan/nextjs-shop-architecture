"use client";

import NavItem from "../components/HeaderComponents/NavItem";
import { usePathname } from "next/navigation";
import { CiUser, CiLogout, CiWallet, CiLocationOn } from "react-icons/ci";
import { signOut } from "next-auth/react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <div className="container grid grid-cols-4 mb-10 gap-4">
      <aside
        className={` col-span-4
          md:block md:col-span-1 md:border border-gray-4 p-4 h-max rounded-xl text-gray-11
        `}
      >
        <h2 className="text-xl text-gray-10 mb-5 font-bold">پنل کاربری</h2>

        <nav className="flex flex-row md:flex-col gap-1 text-sm">
          <NavItem
            href="/dashboard/profile"
            label="حساب کاربری"
            icon={CiUser}
            active={pathname === "/dashboard/profile"}
          />
          <NavItem
            href="/dashboard/orders"
            label="پیگیری سفارشات"
            icon={CiWallet}
            active={pathname === "/dashboard/orders"}
          />
          <NavItem
            href="/dashboard/addresses"
            label="آدرس‌های من"
            icon={CiLocationOn}
            active={pathname === "/dashboard/addresses"}
          />
          <NavItem
            onClick={() => signOut({ callbackUrl: "/" })}
            label="خروج"
            icon={CiLogout}
            hasBorder={false}
            className="hidden md:flex"
          />
        </nav>
      </aside>

      <main
        className={` col-span-4
          md:block md:col-span-3
        `}
      >
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
