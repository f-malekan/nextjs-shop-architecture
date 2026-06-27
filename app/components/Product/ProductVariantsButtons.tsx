"use client";
import type { ProductVariant } from "@/types";
import { useMemo } from "react";
import { HiCheck } from "react-icons/hi";

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
    <div className="space-y-6">
      {/* Colors */}
      <div>
        <p className="mb-2 text-sm font-medium">رنگبندی</p>
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
                className={` p-1 rounded-lg text-sm transition`}
              >
                <div
                  key={color?.id}
                  style={{ backgroundColor: color?.hexCode }}
                  className="h-10 w-10 rounded flex justify-center items-center"
                >
                  {active && <HiCheck color="white" />}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Sizes */}
      <div>
        <p className="mb-2 text-sm font-medium">سایزبندی</p>
        <div className="flex gap-2 flex-wrap">
          {sizes.map((size) => {
            const active = size!.id === selectedSizeId;

            return (
              <button
                key={size!.id}
                onClick={() => onClickOnSize(size!.id)}
                className={`px-3 py-1.5 rounded-lg border text-sm transition
                ${
                  active
                    ? "bg-primary-shade-4 text-white"
                    : "bg-white hover:bg-gray-100 border-gray-300"
                }`}
              >
                {size!.name}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
