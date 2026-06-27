"use client";
import BaseButton from "../BaseComponents/BaseButton";
import { createOrder } from "../../actions/shoppingCartActions";
import useCartStore from "@/store/useCartStore";
import { useState } from "react";

const PaymentButton = () => {
  const { items, removeCompletely } = useCartStore();
  const [error, setError] = useState<string | null>(null);

  const onClick = async () => {
    const result = await createOrder(items);

    if (!result.success) {
      setError(result.message);
      return;
    }

    items.forEach((i) => removeCompletely(i.variantId));
  };
  return (
    <>
      {error && <p className="text-red-500">{error}</p>}
      <BaseButton variant="primary" onClick={onClick} className="w-full">
       ثبت سفارش
      </BaseButton>
    </>
  );
};

export default PaymentButton;
