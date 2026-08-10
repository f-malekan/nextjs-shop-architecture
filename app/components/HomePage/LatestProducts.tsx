import { getLatestProducts } from "@/app/actions/productActions";
import ProductCard from "../Product/ProductCard";
import ErrorState from "../CommonComponents/ErrorState";
import CommonSectionHeader from "../CommonComponents/CommonSectionHeader";
import { BaseSlider } from "../BaseComponents/BaseSlider";
import Link from "next/link";

const LatestProducts = async () => {
  const { data: products, success, message } = await getLatestProducts();

  if (!success) return <ErrorState title={message!} />;

  return (
    <section className="p-2 md:p-12">
      <CommonSectionHeader title="جدیدترین محصولات" href="/products" />
      <div className="container mx-auto mt-10">
        <BaseSlider slidesPerView={{ sm: 2.1, md: 3.3, lg: 4.1 }}>
          {products?.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`}>
              <ProductCard key={product.id} product={product} />
            </Link>
          ))}
        </BaseSlider>
      </div>
    </section>
  );
};

export default LatestProducts;
