export const revalidate = 60;

import ProductCard from "../components/Product/ProductCard";
import EmptyState from "../components/CommonComponents/EmptyState";
import Link from "next/link";
import { RiSearchLine } from "react-icons/ri";
import type { Metadata } from "next";
import { getAllProducts } from "../actions/productActions";
import ErrorState from "../components/CommonComponents/ErrorState";

export const metadata: Metadata = {
  title: "محصولات",
  description: "مشاهده و جستجو در میان محصولات فروشگاه",
};

interface Props {
  searchParams: Promise<{ search?: string; category?: string }>;
}

const ProductsPage = async ({ searchParams }: Props) => {
  const { search, category } = await searchParams;

  const {
    data: products,
    success,
    message,
  } = await getAllProducts(category, search);

  if (!success) return <ErrorState title={message} />;

  if (!products) {
    return (
      <div className="container mx-auto mt-3">
        <EmptyState
          icon={<RiSearchLine size={28} />}
          title="محصولی پیدا نشد"
          description={
            search || category
              ? "فیلتر یا جستجوی فعلی نتیجه‌ای نداشت. عبارت دیگری امتحان کن."
              : "فعلاً محصولی برای نمایش وجود ندارد."
          }
          actionLabel="بازگشت به صفحه اصلی"
          actionHref="/"
        />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 mt-3 container mx-auto">
      {products.map((product) => (
        <Link key={product.id} href={`/products/${product.id}`}>
          <ProductCard className="" product={product} />
        </Link>
      ))}
    </div>
  );
};

export default ProductsPage;
