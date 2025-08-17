import React from "react";
import LeftSection from "./LeftSection";
import RightSections from "./RightSections";
import FloatingIcons from "../common/FloatingIcons";

const HeroSection = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row mb-10">
      <RightSections />
      <LeftSection />
      <FloatingIcons />
    </section>
  );
};

export default HeroSection;
