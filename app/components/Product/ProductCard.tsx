import type { Product } from "@/types";
import Image from "next/image";
import BaseButton from "../BaseComponents/BaseButton";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  product: Product;
  className?: string;
}

const ProductCard = ({ product, className = "", ...props }: Props) => {
  return (
    <div
      {...props}
      className={[
        // card
        "group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200/70 bg-white",
        "shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gray-200/60",
        "focus-within:ring-2 focus-within:ring-indigo-500/30",
        className,
      ].join(" ")}
    >
      {/* image */}
      <div className="relative bg-linear-to-b from-gray-50 to-white p-4">
        <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-white ring-1 ring-gray-200/60">
          <Image
            src={product.image}
            width={600}
            height={600}
            alt={product.name}
            className="h-full w-full object-contain p-3 transition-transform duration-300 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            priority={false}
          />
        </div>

        {/* subtle highlight */}
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="absolute -top-20 -left-24 h-56 w-56 rounded-full bg-indigo-500/10 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-56 w-56 rounded-full bg-rose-500/10 blur-3xl" />
        </div>
      </div>

      {/* content */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="line-clamp-2 text-center text-[15px] font-semibold leading-6 text-gray-900">
          {product.name}
        </h3>

        <div className="mt-auto flex items-center justify-between">
          <p className="text-base font-extrabold text-gray-900">
            {product.price.toLocaleString()}{" "}
            <span className="text-xs font-medium text-gray-500">تومان</span>
          </p>

          <BaseButton
            href={`/products/${product.id}`}
            variant="dark"
            className="px-4 py-2"
          >
            مشاهده
          </BaseButton>
        </div>
      </div>

      {/* hover ring */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-0 ring-indigo-500/0 transition group-hover:ring-2 group-hover:ring-indigo-500/10" />
    </div>
  );
};

export default ProductCard;
