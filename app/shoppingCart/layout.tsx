import Link from "next/link";
import React from "react";

const OrderLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container">
      <div className="flex justify-between items-center text-gray-10">
        <Link href="/shoppingCart">بررسی سفارش</Link>
        <div className="w-100 border-t-2 border-dashed border-gray-4"></div>
        <Link href="/shoppingCart/shippingAddress">انتخاب آدرس</Link>
        <div className="w-100 border-t-2 border-dashed border-gray-4"></div>
        <Link href="/shoppingCart/payment">پرداخت</Link>
      </div>

      {children}
    </div>
  );
};

export default OrderLayout;
