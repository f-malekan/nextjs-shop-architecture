import ContactUsForm from "../components/ContactUs/ContactUsForm";
import ContactMethodCard from "../components/ContactUs/ContactMethodCard";
import { LuMapPin, LuPhone, LuMail, LuClock4 } from "react-icons/lu";

const page = () => {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div className="grid gap-8 lg:grid-cols-2 mb-10">
        <div className="mb-10">
          <h1 className="text-3xl font-bold md:text-4xl">
            با ما در <span className="text-primary">تماس</span> باشید ...
          </h1>
          <p className="mt-4 max-w-3xl">
            در صورت نیاز به هرگونه مشاوره، پیگیری سفارش یا دریافت اطلاعات بیشتر،
            فرم زیر را پر کنید تا تیم پشتیبانی ما در کوتاه‌ترین زمان با شما تماس
            بگیرد.
          </p>

          <div className="space-y-8">
            <p className="leading-8 text-gray-600">
              برای دریافت اطلاعات بیشتر، راهنمایی درباره محصولات، پیگیری
              سفارش‌ها یا ارتباط با تیم پشتیبانی، می‌توانید از روش‌های زیر با ما
              در تماس باشید.
            </p>

            {/* Info cards */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <ContactMethodCard
                title="آدرس"
                text="تهران، ولیعصر، نرسیده به میدان ونک"
              >
                <LuMapPin />
              </ContactMethodCard>
              <ContactMethodCard title="تلفن" text="۰۲۱ - ۱۲۳۴ ۵۶۷۸">
                <LuPhone />
              </ContactMethodCard>
              <ContactMethodCard title="ایمیل" text="info@regal.com">
                <LuMail />
              </ContactMethodCard>
              <ContactMethodCard
                title="ساعت کاری"
                text="شنبه تا چهارشنبه ۹ صبح تا ۱۸"
              >
                <LuClock4 />
              </ContactMethodCard>
            </div>
          </div>
        </div>

        <ContactUsForm />
      </div>

      <div className="w-full h-96 rounded-2xl overflow-hidden relative grayscale">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.563630653664!2d51.4082!3d35.772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDQ2JzE5LjIiTiA1McKwMjQnMjkuNSJF!5e0!3m2!1sen!2sir!4v1624350000000!5m2!1sen!2sir"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default page;
