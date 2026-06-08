export const revalidate = 60;

import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import LatestProducts from "./components/HomePage/LatestProducts";
import { FeaturesGrid } from "./components/HomePage/FeaturesGrid";
import { CategoryShowcase } from "./components/HomePage/CategoryList";
import CommonSectionHeader from "./components/CommonComponents/CommonSectionHeader";

// error handling, rendering sides check/ seo, clean code, component based/ all should be arrow functions// error handlinh general/ empty states
//loading state on button and every where/ pagination/ role base: admin, / separate constants/ schema ha hame y ja/ responsive

const Home = async () => {
  return (
    <main>
      <div className="bg-[#C3EFD4] p-30 pt-10 flex h-[calc(100dvh-60px)] gap-20 items-center">
        <div className="basis-2/3 p-5 ">
          <h2 className="text-[#184025] text-5xl font-extrabold leading-normal">
            کشف کن و استایل مخصوص خودت رو پیدا کن؛ جایی که هر انتخاب، داستان تو
            رو تعریف می‌کنه.
          </h2>

          <Link
            href="/products"
            className="
    group inline-flex items-center gap-3 mt-8
    rounded-2xl bg-[#184025] text-white
    px-6 py-3 text-lg font-semibold
    shadow-lg shadow-[#184025]/20
    transition-all duration-200
    hover:-translate-y-0.5 hover:bg-[#0f2f1a]
    focus:outline-none focus:ring-4 focus:ring-[#184025]/25
  "
          >
            <span>مشاهده محصولات</span>
            <FaArrowLeft
              className="
      text-base transition-transform duration-200
      group-hover:-translate-x-1
    "
            />
          </Link>
        </div>

        <div className="basis-1/3">
          <div
            className="w-80 h-100
            rounded-tl-4xl
            rounded-tr-lg
            rounded-br-4xl 
            rounded-bl-lg
            bg-[#6AC685]"
          >
            <Image
              src={"/images/green-dress.png"}
              alt="green dress"
              width={300}
              height={400}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
      <section className="container py-12">
        <CommonSectionHeader
          title="جدیدترین محصولات"
          subtitle="جدیدترین‌های اوتانا"
          href="/products"
        />
        <LatestProducts />
        <FeaturesGrid />
      </section>
      <CategoryShowcase />
    </main>
  );
};

export default Home;
