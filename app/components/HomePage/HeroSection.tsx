import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="bg-[#C3EFD4] 
      px-6 py-10 md:px-16 lg:px-32 
      flex flex-col-reverse lg:flex-row 
      min-h-[calc(100dvh-80px)] lg:h-[calc(100dvh-80px)] 
      gap-10 lg:gap-20 items-center justify-center">
      
      {/* متن و دکمه */}
      <div className="w-full lg:basis-2/3 text-center lg:text-right">
        <h2 className="text-[#184025] text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight lg:leading-normal">
          کشف کن و استایل مخصوص خودت رو پیدا کن؛ جایی که هر انتخاب، داستان تو رو
          تعریف می‌کنه.
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

      {/* تصویر */}
      <div className="w-full lg:basis-1/3 flex justify-center items-center">
        <div
          className="relative w-64 h-80 md:w-80 md:h-100
            rounded-tl-[40px]
            rounded-tr-lg
            rounded-br-[40px] 
            rounded-bl-lg
            bg-[#6AC685]
            flex items-center justify-center"
        >
          <Image
            src={"/images/green-dress.png"}
            alt="green dress"
            width={300}
            height={400}
            className="w-[90%] h-auto drop-shadow-2xl"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
