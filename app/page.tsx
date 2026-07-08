
import LatestProducts from "./components/HomePage/LatestProducts";
import HeroSection from "./components/HomePage/HeroSection";
import CategoryGrid from "./components/HeaderComponents/CategoryGrid";
import CustomDress from "./components/CustomDressSection";

// error handling, rendering sides check/ seo, clean code, component based/ all should be arrow functions// error handlinh general/ empty states
//loading state on button and every where/ pagination/ role base: admin, / separate constants/ schema ha hame y ja/ responsive

const Home = async () => {
  return (
    <main>
      <HeroSection />

      <CategoryGrid />

      <CustomDress />
      <LatestProducts />
    </main>
  );
};

export default Home;
