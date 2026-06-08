"use client";
import BaseButton from "../BaseComponents/BaseButton";
import { createOrder } from "../../actions/shoppingCartActions";
import useCartStore from "@/store/useCartStore";
import { useState } from "react";
import type { shoppingCartItemType } from "@/types";

const PaymentButton = ({ items }: { items: shoppingCartItemType[] }) => {
  const { removeCompletely } = useCartStore();
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
      <BaseButton variant="primary" onClick={onClick}>
        پرداخت
      </BaseButton>
    </>
  );
};

export default PaymentButton;
