"use client";
import React from "react";
import BaseButton from "../BaseComponents/BaseButton";
import useCartStore from "@/store/useCartStore";
import type { ProductVariant } from "@/types";

interface Props {
  variantId: string;
  productId: string;
  name: string;
  image: string;
  color: string;
  size: string;
  price: number;
  selectedVariant?: ProductVariant;
}

const AddToCartButton = ({
  variantId,
  productId,
  name,
  image,
  color,
  size,
  price,
  selectedVariant,
}: Props) => {
  const { addItem } = useCartStore();

  return (
    <BaseButton
      variant="primary"
      onClick={() =>
        addItem({
          variantId: variantId,
          productId: productId,
          name: name,
          image: image,
          color: color,
          size: size,
          price: price,
          selectedVariant: selectedVariant,
        })
      }
    >
      افزودن به سبد خرید
    </BaseButton>
  );
};

export default AddToCartButton;
