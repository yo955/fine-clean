import React from "react";
import LeftSection from "./LeftSection";
import RightSections from "./RightSections";

const HeroSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 mb-10 max-h-[620px]">
      <RightSections />
      <LeftSection />
    </div>
  );
};

export default HeroSection;
