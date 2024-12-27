import React from "react";
import LeftSection from "./LeftSection";
import RightSections from "./RightSections";

const HeroSection = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 mb-10">
      <RightSections />
      <LeftSection />
    </section>
  );
};

export default HeroSection;
