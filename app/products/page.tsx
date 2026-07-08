import ProductCard from "../components/Product/ProductCard";
import EmptyState from "../components/CommonComponents/EmptyState";
import Link from "next/link";
import { RiSearchLine } from "react-icons/ri";
import type { Metadata } from "next";
import { getAllProducts } from "../actions/productActions";
import ErrorState from "../components/CommonComponents/ErrorState";
import BasePagination from "../components/BaseComponents/BasePagination";

export const metadata: Metadata = {
  title: "محصولات",
  description: "مشاهده و جستجو در میان محصولات فروشگاه",
};

interface Props {
  searchParams: Promise<{ search?: string; category?: string; page?: number }>;
}

const ProductsPage = async ({ searchParams }: Props) => {
  const { search, category, page: pageParam } = await searchParams;
  const page = Number(pageParam) || 1;

  const {
    data: products,
    success,
    message,
    totalCount,
  } = await getAllProducts(category, search, page);

  if (!success) return <ErrorState title={message ?? undefined} />;

  if (!products || products.length === 0) {
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
          className="mb-1
          "
        />
      </div>
    );
  }

  const totalPages = Math.ceil(totalCount / 20);

  return (
    <>
      {" "}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3 mt-3 container mx-auto">
        {products.map((product, index) => (
          <Link key={product.id} href={`/products/${product.id}`}>
            <ProductCard className="" product={product} priority={index < 4} />
          </Link>
        ))}
      </div>
      {totalPages > 1 && (
        <BasePagination
          currentPage={page}
          totalPages={totalPages}
          className="my-15"
        />
      )}
    </>
  );
};

export default ProductsPage;
