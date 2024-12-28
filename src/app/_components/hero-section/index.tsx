import React from "react";
import LeftSection from "./LeftSection";
import RightSections from "./RightSections";
import FloatingIcons from "../common/FloatingIcons";

const HeroSection = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 mb-10">
      <RightSections />
      <LeftSection />
      <FloatingIcons />
    </section>
  );
};

export default HeroSection;
