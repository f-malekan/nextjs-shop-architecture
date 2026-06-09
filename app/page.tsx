export const revalidate = 60;

import LatestProducts from "./components/HomePage/LatestProducts";
import { FeaturesGrid } from "./components/HomePage/FeaturesGrid";
import { CategoryShowcase } from "./components/HomePage/CategoryList";
import CommonSectionHeader from "./components/CommonComponents/CommonSectionHeader";
import HeroSection from "./components/HomePage/HeroSection";

// error handling, rendering sides check/ seo, clean code, component based/ all should be arrow functions// error handlinh general/ empty states
//loading state on button and every where/ pagination/ role base: admin, / separate constants/ schema ha hame y ja/ responsive

const Home = async () => {
  return (
    <main>
      <HeroSection/>
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
