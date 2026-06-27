import CategoryCard from "../HomePage/CategoryCard";
import Link from "next/link";

const categories = [
  {
    title: "پیراهن کوتاه",
    tags: ["دخترانه", "مناسب مهمانی"],
    image: "/images/category/dress.png",
    className: "md:col-span-1 md:row-span-6",
    slug: "dress",
  },
  {
    title: "شلوار",
    tags: ["رسمی", "استایل روزمره"],
    image: "/images/category/pants.png",
    className: "md:col-span-1 md:row-span-3",
    slug: "pants",
  },
  {
    title: "سرهمی",
    tags: ["روزمره", "کالکشن جدید"],
    image: "/images/category/jumpsuit.png",
    className: "md:col-span-1 md:row-span-2",
    slug: "jumpsuit",
  },
  {
    title: "کت و جلیقه",
    tags: ["کلاسیک", "مینیمال"],
    image: "/images/category/blazer.png",
    className: "md:col-span-1 md:row-span-2",
    slug: "blazer",
  },
  {
    title: "دامن",
    tags: ["تابستانه", "پاییزه"],
    image: "/images/category/skirt.png",
    className: "md:col-span-1 md:row-span-2",
    slug: "skirt",
  },
  {
    title: "شومیز و بلوز",
    tags: ["تمام فصول", "کژوال"],
    image: "/images/category/shirt.png",
    className: "md:col-span-1 md:row-span-4",
    slug: "shirt",
  },
  {
    title: "تاپ و کراپ",
    tags: ["مجلسی", "روزمره"],
    image: "/images/category/top.png",
    className: "md:col-span-1 md:row-span-3",
    slug: "top",
  },
  {
    title: "ترنچ کت و پالتو",
    tags: ["گرم و شیک", "مدرن"],
    image: "/images/category/trench.png",
    className: "md:col-span-1 md:row-span-2",
    slug: "trench",
  },
];

export default function ProductCategories() {
  return (
    <section className="w-full bg-white py-10" dir="rtl">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-10 text-right text-2xl font-bold md:text-3xl">
          دسته بندی محصولات
        </h2>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:grid-rows-6 h-150 md:h-175">
          {categories.map((item, index) => (
            <Link
            key={index}
              href={`/products?category=${item.slug}`}
              className={item.className}
            >
              <CategoryCard
                key={index}
                title={item.title}
                img={item.image}
                className="h-full"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
