import Link from "next/link";
import BaseButton from "./BaseComponents/BaseButton";
import BaseInput from "./BaseComponents/BaseInput";

const Footer = () => {
  return (
    <footer className="bg-[#184025] text-white mt-5">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-semibold tracking-wide mb-4">OTANA</h2>
          <p className="text-sm text-gray-200 leading-6">
            پوشاک مدرن و مینیمال برای استایل روزمره شما. کیفیت بالا، طراحی خاص و
            تجربه خرید ساده.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-medium mb-4">دسترسی سریع</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li>
              <Link href="/shop" className="hover:text-white transition">
                فروشگاه
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition">
                درباره ما
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition">
                تماس با ما
              </Link>
            </li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-medium mb-4">خدمات مشتریان</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li>
              <Link href="/faq" className="hover:text-white transition">
                سوالات متداول
              </Link>
            </li>
            <li>
              <Link href="/returns" className="hover:text-white transition">
                شرایط بازگشت
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-white transition">
                حریم خصوصی
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-medium mb-4">خبرنامه</h3>
          <p className="text-sm text-gray-200 mb-4">
            برای اطلاع از تخفیف‌ها ایمیل خود را وارد کنید.
          </p>
          <div className="flex gap-1">
            <BaseInput type="email" placeholder="ایمیل شما" />
            <BaseButton variant="dark">ثبت</BaseButton>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/20 text-center py-6 text-sm text-gray-200">
        © {new Date().getFullYear()} OTANA. All rights reserved.
      </div>
    </footer>
  );
};
export default Footer;
