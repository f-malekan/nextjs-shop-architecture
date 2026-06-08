"use client";
import useCartStore from "@/store/useCartStore";
import type { Product, ProductVariant } from "@/types";

interface Props {
  variantId: string;
  productId: string;
  name: string;
  image: string;
  color: string;
  size: string;
  price: number;
  selectedVariant?: ProductVariant
}

const ProductCounter = ({
  variantId,
  productId,
  name,
  image,
  color,
  size,
  price,
  selectedVariant
}: Props) => {
  const { items, addItem, removeItem } = useCartStore();

  const selectedItem = items.find((i) => i.variantId === variantId);
  const quantity = selectedItem?.quantity || 0;

  const handleAddItem = () =>
    addItem({
      variantId: variantId,
      productId: productId,
      name: name,
      image: image,
      color: color,
      size: size,
      price: price,
      selectedVariant:selectedVariant
    });
  const handleRemoveItem = () => removeItem(variantId);

  return (
    <div className="flex items-center gap-3 bg-gray-100 rounded-full px-3 py-1 w-fit">
      <button
        onClick={handleRemoveItem}
        disabled={quantity === 0}
        className="flex items-center justify-center w-7 h-7 rounded-full bg-white shadow text-lg font-semibold hover:bg-gray-200 disabled:opacity-40 disabled:cursor-not-allowed"
      >
        −
      </button>

      <span className="min-w-5 text-center font-medium text-gray-800">
        {quantity}
      </span>

      <button
        onClick={handleAddItem}
        className="flex items-center justify-center w-7 h-7 rounded-full bg-white shadow text-lg font-semibold hover:bg-gray-200"
      >
        +
      </button>
    </div>
  );
};

export default ProductCounter;
