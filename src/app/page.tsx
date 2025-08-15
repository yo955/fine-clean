import Banner from "./_components/banner-section/Banner";
import HeroSection from "./_components/hero-section";
import Advantages from "./_components/our-advantages/Advantages";
import ServicesSection from "./_components/ServicesSection/ServicesSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <Banner />
      <Advantages />
    </>
  );
}
