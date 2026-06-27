"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import BaseInput from "../BaseComponents/BaseInput";
import { searchProducts } from "@/app/actions/productActions";
import { Product } from "@/types";
import ProductCard from "../Product/ProductCard";
import CommonSectionHeader from "../CommonComponents/CommonSectionHeader";

interface Props {
  showSearch: boolean;
  setShowSearch: (data: boolean) => void;
}

const SearchBar = ({ showSearch, setShowSearch }: Props) => {
  const [search, setSearch] = useState("");
  const router = useRouter();
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

  const handleSeeAll = () => {
    router.push(`/products?search=${search}`);
    setShowSearch(false);
  };

  return (
    <div
      className={[
        "fixed flex flex-col right-0 top-25 overflow-hidden transition-all duration-300 ease-out z-50",
        showSearch ? "h-screen w-screen opacity-100" : "h-0 opacity-0",
      ].join(" ")}
    >
      <div className="bg-white px-40">
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
              viewAllLabel
              onClick={handleSeeAll}
            />
            <div className="container mx-auto mt-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-6">
                {products?.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={{ ...product, price: Number(product.price) }}
                  />
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
      <div className="bg-gray-10/90 grow"></div>
    </div>
  );
};

export default SearchBar;
