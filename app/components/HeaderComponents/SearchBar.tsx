"use client";
import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import BaseInput from "../BaseComponents/BaseInput";
import { searchProducts } from "@/app/actions/productActions";
import { Product } from "@/types";
import ProductCard from "../Product/ProductCard";
import CommonSectionHeader from "../CommonComponents/CommonSectionHeader";
import EmptyState from "../CommonComponents/EmptyState";
import { FaSearch } from "react-icons/fa";
import { usePathname } from "next/navigation";

interface Props {
  showSearch: boolean;
  setShowSearch: (data: boolean) => void;
}

const SearchBar = ({ showSearch, setShowSearch }: Props) => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState<Product[]>();

  const handleSearch = useDebouncedCallback(async (value: string) => {
    if (value.length < 3) {
      setProducts([]);
      return;
    }
    setSearch(value);
    const response = await searchProducts(value);

    if (response.success && response.data) {
      setProducts(response.data);
    }
  }, 300);

  const pathName = usePathname();

  useEffect(() => {
    setShowSearch(false);
  }, [pathName, setShowSearch]);

  return (
    <div
      className={[
        "fixed flex flex-col right-0 top-21 overflow-hidden transition-all duration-300 ease-out z-50",
        showSearch ? "h-screen w-screen opacity-100" : "h-0 opacity-0",
      ].join(" ")}
    >
      <div className="bg-white px-5 lg:px-30 overflow-hidden">
        <BaseInput
          type="text"
          placeholder="جستجو کنید.."
          onChange={(event) => handleSearch(event.target.value)}
          className="w-[75%] mb-5"
        />

        {search.length > 0 && (
          <section>
            <CommonSectionHeader
              title="نتیجه جست و جو"
              href={`/products?search=${search}`}
              viewAllLabel={!!(!!products && products.length > 0)}
            />
            <div className="container mx-auto mt-10">
              {!!products && products.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                  {products?.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={{ ...product, price: Number(product.price) }}
                    />
                  ))}
                </div>
              ) : (
                <EmptyState
                  title="نتیجه‌ای یافت نشد"
                  description={`متأسفانه برای این عبارت محصولی پیدا نکردیم. لطفاً کلمات کلیدی دیگری را امتحان کنید.`}
                  icon={<FaSearch className="w-8 h-8" />}
                  actionLabel="مشاهده همه محصولات"
                  actionHref="/products"
                  className="mt-10 mb-5"
                />
              )}
            </div>
          </section>
        )}
      </div>
      <div className="bg-gray-10/90 grow"></div>
    </div>
  );
};

export default SearchBar;
