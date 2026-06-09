import type { Metadata } from "next";
import ShoppingCart from "../components/ShoppingCardComponents/ShoppingCart";

export const metadata: Metadata = {
  title: "سبد خرید",
  description:
    "محصولات انتخاب‌شده خود را بررسی کنید و برای ادامه خرید به مرحله پرداخت بروید.",
  robots: {
    index: false,
    follow: false,
  },
};

const CartPage = () => {
  return <ShoppingCart />;
};

export default CartPage;
