import {
  RiTruckLine,
  RiShieldCheckLine,
  RiCustomerService2Line,
} from "react-icons/ri";
import { HiOutlineRefresh } from "react-icons/hi";

const features = [
  {
    icon: <RiTruckLine size={40} />,
    title: "ارسال سریع",
    desc: "تحویل درب منزل در کمترین زمان",
  },
  {
    icon: <HiOutlineRefresh size={40} />,
    title: "ضمانت بازگشت",
    desc: "۷ روز مهلت تست و تعویض",
  },
  {
    icon: <RiShieldCheckLine size={40} />,
    title: "پرداخت امن",
    desc: "امنیت کامل در تمام تراکنش‌ها",
  },
  {
    icon: <RiCustomerService2Line size={40} />,
    title: "پشتیبانی ۲۴/۷",
    desc: "پاسخگویی در تمام ایام هفته",
  },
];

export const FeaturesGrid = () => {
  return (
    <section className="my-10 px-4">
      <div className="rounded-[2.5rem] py-16 relative overflow-hidden bg-[#C3EFD4]">
        {/* دایره‌های تزئینی با رنگ تیره ملایم برای ایجاد عمق در پس‌زمینه روشن */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/40 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#184025]/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />

        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 px-6">
            {features.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center group"
              >
                {/* آیکون‌ها با رنگ سبز تیره برند */}
                <div className="mb-6 text-[#184025]/80 group-hover:text-[#184025] group-hover:scale-110 transition-all duration-300">
                  {item.icon}
                </div>

                {/* متون با رنگ سبز تیره برای خوانایی بالا */}
                <h3 className="text-xl font-black text-[#184025] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#184025]/70 font-medium leading-relaxed max-w-45">
                  {item.desc}
                </p>

                {/* خط تزیینی */}
                <div className="w-8 h-1 bg-[#184025]/20 mt-6 rounded-full group-hover:w-16 group-hover:bg-[#184025]/40 transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
