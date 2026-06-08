"use client";
import type { ProductVariant } from "@/types";
import { useState, useMemo } from "react";

const ProductDetails = ({
  variants,
  selectedColorId,
  selectedSizeId,
  onClickOnColor,
  onClickOnSize,
}: {
  variants: ProductVariant[];
  selectedColorId: string;
  selectedSizeId: string;
  onClickOnColor: (colorId: string) => void;
  onClickOnSize: (sizeId: string) => void;
}) => {
  const first = variants[0];

  const colors = useMemo(() => {
    const map = new Map();
    variants.forEach((v) => map.set(v.colorId, v.color));
    return Array.from(map.values());
  }, [variants]);

  const sizes = useMemo(() => {
    return variants
      .filter((v) => v.colorId === selectedColorId)
      .map((v) => v.size);
  }, [variants, selectedColorId]);

  return (
    <div className="space-y-6 p-4">
      {/* Colors */}
      <div>
        <p className="mb-2 text-sm font-medium text-gray-700">رنگ</p>
        <div className="flex gap-2 flex-wrap">
          {colors.map((color) => {
            const active = color.id === selectedColorId;

            return (
              <button
                key={color.id}
                onClick={() => {
                  onClickOnColor(color.id);

                  const firstSize = variants.find(
                    (v) => v.colorId === color.id,
                  )?.sizeId;

                  if (firstSize) onClickOnSize(firstSize);
                }}
                className={`px-3 py-1.5 rounded-lg border text-sm transition
                ${
                  active
                    ? "bg-black text-white border-black"
                    : "bg-white hover:bg-gray-100 border-gray-300"
                }`}
              >
                {color.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Sizes */}
      <div>
        <p className="mb-2 text-sm font-medium text-gray-700">سایز</p>
        <div className="flex gap-2 flex-wrap">
          {sizes.map((size) => {
            const active = size.id === selectedSizeId;

            return (
              <button
                key={size.id}
                onClick={() => onClickOnSize(size.id)}
                className={`px-3 py-1.5 rounded-lg border text-sm transition
                ${
                  active
                    ? "bg-black text-white border-black"
                    : "bg-white hover:bg-gray-100 border-gray-300"
                }`}
              >
                {size.name}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;