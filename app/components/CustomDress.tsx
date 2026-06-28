import Image from "next/image";

const CustomDress = () => {
  const images = [
    {
      src: "/images/custom-dress/right-1.jpg",
      width: "w-[220px]",
      height: "h-[300px]",
    },
    {
      src: "/images/custom-dress/right-2.jpg",
      width: "w-[280px]",
      height: "h-[400px]",
    },
    {
      src: "/images/custom-dress/main.jpg",
      width: "w-[374px]",
      height: "h-[520px]",
      isMain: true,
    },
    {
      src: "/images/custom-dress/left-1.jpg",
      width: "w-[280px]",
      height: "h-[400px]",
    },
    {
      src: "/images/custom-dress/left-2.jpg",
      width: "w-[220px]",
      height: "h-[300px]",
    },
  ];

  return (
    <section className="py-20 px-12 overflow-hidden bg-gray-2" dir="rtl">
      <div className="max-w-360 mx-auto text-center">
        <div className="mb-14">
          <h2>طراحی و دوخت بر اساس شکل بدن شما</h2>
          <p className="max-w-212.5 mx-auto">
            در این بخش از فروشگاه ما، لباس‌ها و استایل‌هایی را پیدا می‌کنید که
            با فرم بدنی شما همخوانی دارند. ما به شما کمک می‌کنیم تا بهترین
            انتخاب‌ها را بر اساس فرم بدنی‌تان داشته باشید. برای شروع، کافیست فرم
            بدنی خود را انتخاب کنید تا ما به شما لباس‌هایی را پیشنهاد دهیم که به
            شما احساس راحتی و زیبایی بیشتری ببخشند.
          </p>
        </div>

        <div className="flex justify-center items-center gap-6 h-137.5">
          {images.map((img, index) => (
            <div
              key={index}
              className={`relative transition-all duration-500 rounded-2xl overflow-hidden shadow-sm
                ${img.width} ${img.height}
                ${index === 0 || index === 4 ? "hidden md:block" : index === 1 || index === 3 ? "hidden sm:block" : ""}
              `}
            >
              <Image
                src={img.src}
                alt="Regal Custom Dress"
                fill
                className="object-cover object-top"
                sizes={img.isMain ? "374px" : "280px"}
              />
            </div>
          ))}
        </div>

        {/* Button CTA */}
        {/* <div className="mt-12">
          <button className="bg-[#1A1A1A] text-white px-8 py-3 rounded-xl hover:bg-black transition-all flex items-center gap-2 mx-auto">
            <span>✨</span>
            شخصی‌دوزی
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default CustomDress;
