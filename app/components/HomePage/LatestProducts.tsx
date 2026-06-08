import { getLatestProducts } from "@/app/actions/productActions";
import ProductCard from "../Product/ProductCard";
import ErrorState from "../CommonComponents/ErrorState";

const LatestProducts = async () => {
  const { data: products, success, message } = await getLatestProducts();

  if (!success) return <ErrorState title={message!} />;

  return (
    <section className="py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products?.map((product) => (
            <ProductCard
              key={product.id}
              product={{ ...product, price: Number(product.price) }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestProducts;
