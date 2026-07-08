"use client";
import BaseButton from "../BaseComponents/BaseButton";
import { createOrder } from "../../actions/shoppingCartActions";
import useCartStore from "@/store/useCartStore";
import { toast } from "sonner";

const PaymentButton = () => {
  const { items, removeCompletely } = useCartStore();

  const onClick = async () => {
    const result = await createOrder(items);

    if (!result.success) {
      toast.error(result.message);
      return;
    }
    toast.success(result.message);

    items.forEach((i) => removeCompletely(i.variantId));
  };
  return (
    <BaseButton variant="primary" onClick={onClick} className="w-full">
      ثبت سفارش
    </BaseButton>
  );
};

export default PaymentButton;
