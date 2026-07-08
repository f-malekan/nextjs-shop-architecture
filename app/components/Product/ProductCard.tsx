import type { Product } from "@/types";
import Image from "next/image";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  product: Product;
  className?: string;
  priority?: boolean;
}

const ProductCard = ({
  product,
  className = "",
  priority = false,
  ...props
}: Props) => {
  const colors = Array.from(
    new Map(product.variants?.map((v) => [v.colorId, v.color])).values(),
  );

  return (
    <div>
      <div
        {...props}
        className={[
          // card
          "w-full relative overflow-hidden rounded-2xl aspect-5/7",
          "shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gray-200/60",
          "focus-within:ring-2 focus-within:ring-indigo-500/30",
          className,
        ].join(" ")}
      >
        <Image
          src={product.image}
          width={600}
          height={600}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          priority={priority}
        />
      </div>
      <div className="flex flex-col md:flex-row p-5 justify-between gap-2">
        <div>
          <p className="text-sm">{product.name}</p>

          <p className="text-sm">
            {product.price.toLocaleString()}{" "}
            <span className="text-gray-10 text-xs">تومان</span>
          </p>
        </div>
        <div className="flex gap-2">
          {colors.map((color) => (
            <div
              key={color?.id}
              style={{ backgroundColor: color?.hexCode }}
              className="w-3 h-3 md:h-5 md:w-5 rounded"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
