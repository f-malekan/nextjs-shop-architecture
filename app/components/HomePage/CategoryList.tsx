import Link from "next/link";
import ProductCard from "../Product/ProductCard";
import { getCategoriesWithProducts } from "@/app/actions/categoryActions";
import CommonSectionHeader from "../CommonComponents/CommonSectionHeader";
import ErrorState from "../CommonComponents/ErrorState";

export const CategoryShowcase = async () => {
  const {
    data: categories,
    success,
    message
  } = await getCategoriesWithProducts();
  
  if (!success) return <ErrorState title={message!} />;

  return (
    <section className="w-full bg-(--color-pink-1) py-16">
      <div className="max-w-7xl mx-auto px-6 space-y-20">
        {categories?.map((cat) => (
          <div key={cat.id} className="flex flex-col">
            <div className="flex items-center justify-between mb-10">
              <CommonSectionHeader
                title={cat.name}
                subtitle={` جدیدترین‌های مجموعه ${cat.name}`}
                href={`/products?category=${cat.slug}`}
              />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {cat.products?.slice(0, 4).map((product) => (
                <Link key={product.id} href={`/products/${product.id}`}>
                  {" "}
                  <ProductCard
                    className=""
                    product={{ ...product, price: Number(product.price) }}
                  />
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
