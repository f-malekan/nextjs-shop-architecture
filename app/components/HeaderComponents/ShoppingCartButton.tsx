"use client";
import useCartStore from "@/store/useCartStore";
import { redirect } from "next/navigation";
import { FiShoppingCart } from "react-icons/fi";

const CartButton = () => {
  const { items, getTotalItems } = useCartStore();
  const totalItems = getTotalItems()

  return (
    <div className="relative cursor-pointer" onClick={() => redirect("/shoppingCart")}>
      <FiShoppingCart size={26} />
       {totalItems > 0 && (
        <span className="absolute -top-3 -right-3 text-[10px] flex items-center justify-center bg-red-500 text-white rounded-full w-5 h-5 shadow-sm">
          {totalItems}
        </span>
      )}
    </div>
  );
};

export default CartButton;
