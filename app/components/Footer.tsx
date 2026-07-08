import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black text-white min-h-91">
      <div className="max-w-3xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-15">
        <div>
          <h3 className="text-2xl font-semibold tracking-wide mb-4">OTANA</h3>
          <p className="text-sm text-gray-200 leading-6">
            پوشاک مدرن و مینیمال برای استایل روزمره شما. کیفیت بالا، طراحی خاص و
            تجربه خرید ساده.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">دسترسی سریع</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li>
              <Link href="/products" className="hover:text-white transition">
                فروشگاه
              </Link>
            </li>

            <li>
              <Link href="/contact" className="hover:text-white transition">
                تماس با ما
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex justify-end">
          <Image
            src={"/images/enamad.png"}
            alt="نماد اعتماد الکترونیکی فروشگاه OTANA"
            width={200}
            height={200}
            className="rounded-xl"
          />
        </div>
      </div>

      <div className="border-t border-white/20 text-center py-6 text-sm text-gray-200">
        © 2026 OTANA. All rights reserved.
      </div>
    </footer>
  );
};
export default Footer;
