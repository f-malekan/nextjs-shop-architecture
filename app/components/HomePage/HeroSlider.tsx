import { BaseSlider } from "../BaseComponents/BaseSlider";
import Image from "next/image";

const HeroSlider = () => {
  return (
    <BaseSlider slidesPerView={{ sm: 2.1, md: 3.3, lg: 3.3 }}>
      <div className="relative h-80 rounded-2xl w-full overflow-hidden shadow-xl bg-[#F4F1E9] py-5">
        <Image
          src="/images/dress-bb.webp"
          className="w-full h-full object-contain"
          alt="Product"
          width={300}
          height={300}
        />
      </div>
      <div className="relative h-80 rounded-2xl overflow-hidden bg-[#F4F1E9] py-5">
        <Image
          src="/images/dress-bb.webp"
          className="w-full h-full object-contain"
          alt="Product"
          width={300}
          height={300}
        />
      </div>
      <div className="relative h-80 rounded-2xl overflow-hidden bg-[#F4F1E9] py-5">
        <Image
          src="/images/dress-bb.webp"
          className="w-full h-full object-contain"
          alt="Product"
          height={300}
          width={300}
        />
      </div>
      <div className="relative h-80 rounded-2xl overflow-hidden bg-[#F4F1E9] py-5">
        <Image
          src="/images/dress-bb.webp"
          className="w-full h-full object-contain"
          alt="Product"
          width={300}
          height={300}
        />
      </div>
      <div className="relative h-80 rounded-2xl overflow-hidden bg-[#F4F1E9] py-5">
        <Image
          src="/images/dress-bb.webp"
          className="w-full h-full object-contain"
          alt="Product"
          width={300}
          height={300}
        />
      </div>
    </BaseSlider>
  );
};

export default HeroSlider;
