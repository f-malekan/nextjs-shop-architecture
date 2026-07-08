import Image from "next/image";
import { getProductWithVariants } from "@/app/actions/productActions";
import ProductClientComponents from "@/app/components/Product/ProductClientComponents";
import ErrorState from "@/app/components/CommonComponents/ErrorState";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props) {
  const productId = (await params).id;
  const { data: product, success } = await getProductWithVariants(productId);

  if (!success || !product) {
    return {
      title: "محصول یافت نشد",
    };
  }

  return {
    title: product.name,
    description: product.description ?? "",
    openGraph: {
      title: product.name,
      images: [product.image],
    },
  };
}

const ProductDetailsPage = async ({ params }: Props) => {
  const productId = (await params).id;

  const {
    data: product,
    success,
    message,
  } = await getProductWithVariants(productId);

  if (!success || !product) return <ErrorState title={message ?? undefined} />;

  return (
    <div className="container mx-auto px-4 py-5">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div className=" relative aspect-square w-full rounded-xl flex justify-center">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>

        <div className="space-y-6">
          <h1 className="text-2xl font-semibold">{product.name}</h1>

          <div className="text-xl font-bold">
            {Number(product.price).toLocaleString()} تومان
          </div>

          {product.description && (
            <div className="pt-4 leading-relaxed">
              {product.description}
            </div>
          )}

          <ProductClientComponents product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
