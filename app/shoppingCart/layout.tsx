import Link from "next/link";
import React from "react";
import { auth } from "../auth";
import LoginRequiredWarning from "../components/Auth/LoginRequiredWarning";

const OrderLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();
  
  return (
    <div className="container">
      <div className="flex justify-between items-center text-gray-10 mb-10">
        <Link href="/shoppingCart">بررسی سفارش</Link>
        <div className="w-100 border-t-2 border-dashed border-gray-4"></div>
        <Link href="/shoppingCart/shippingAddress">انتخاب آدرس</Link>
        <div className="w-100 border-t-2 border-dashed border-gray-4"></div>
        <Link href="/shoppingCart/payment">پرداخت</Link>
      </div>

      {!session && <LoginRequiredWarning />}

      {children}
    </div>
  );
};

export default OrderLayout;
