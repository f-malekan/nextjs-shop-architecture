export const revalidate = 60

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

  if (!success || !product) return <ErrorState title={message} />;

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div className="bg-gray-100 rounded-xl p-6 flex justify-center">
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            className="object-contain rounded-lg"
            priority
          />
        </div>

        <div className="space-y-6">
          <h1 className="text-2xl font-semibold text-gray-900">
            {product.name}
          </h1>

          <div className="text-2xl font-bold text-gray-900">
            {Number(product.price).toLocaleString()} تومان
          </div>

          <ProductClientComponents product={product} />

          {product.description && (
            <div className="border-t pt-4 text-gray-600 leading-relaxed">
              {product.description}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
