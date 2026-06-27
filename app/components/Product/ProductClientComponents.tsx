"use client";
import { Product } from "@/types";
import ProductCounter from "./ProductCounter";
import ProductVariantsSelectBox from "./ProductVariantsButtons";
import { useState } from "react";
import AddToCartButton from "./AddToCartButton";

const ProductClientComponents = ({ product }: { product: Product }) => {
  const [selectedColorId, setSelectedColorId] = useState(
    product.variants![0].colorId,
  );
  const [selectedSizeId, setSelectedSizeId] = useState(
    product.variants![0].sizeId,
  );

  const selectedVariant = product?.variants!.find(
    (v) => v.colorId === selectedColorId && v.sizeId === selectedSizeId,
  );

  const variantId = selectedVariant?.id;

  return (
    <div>
      {" "}
      <ProductVariantsSelectBox
        variants={product.variants!}
        selectedColorId={selectedColorId}
        selectedSizeId={selectedSizeId}
        onClickOnColor={(id) => setSelectedColorId(id)}
        onClickOnSize={(id) => setSelectedSizeId(id)}
      />
      <div className="flex gap-5 mt-10">
        <ProductCounter
          productId={product.id}
          name={product.name}
          image={product.image}
          color={selectedColorId}
          size={selectedSizeId}
          price={Number(product.price)}
          variantId={variantId ?? ""}
          selectedVariant={selectedVariant}
        />
        <AddToCartButton
          productId={product.id}
          name={product.name}
          image={product.image}
          color={selectedColorId}
          size={selectedSizeId}
          price={Number(product.price)}
          variantId={variantId ?? ""}
          selectedVariant={selectedVariant}
        />
      </div>
    </div>
  );
};

export default ProductClientComponents;
