import Banner from "./_components/banner-section/Banner";
import MapComponent from "./_components/common/MapComponent";
import HeroSection from "./_components/hero-section";
import Advantages from "./_components/our-advantages/Advantages";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Banner />
      <Advantages />
      <MapComponent width={100} radius={0}/>
    </>
  );  
}
