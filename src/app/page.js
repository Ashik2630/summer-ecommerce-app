import Banner from "@/components/shared/Banner";
import PopularProducts from "@/components/shared/PopularProducts";
import SummerCareSection from "@/components/shared/SummerCareSection";
import TopBrands from "@/components/shared/TopBrands";

export default function Home() {
  return (
    <div>
      <Banner/>
      <PopularProducts/>
      <SummerCareSection/>
      <TopBrands/>
    </div>
  );
}
