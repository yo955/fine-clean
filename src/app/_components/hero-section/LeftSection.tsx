import Image from "next/image";
import React from "react";

const LeftSection = () => {
  return (
    <div className="flex flex-wrap justify-center">
      <div className="p-5 text-center w-full flex justify-center items-center">
        <h3 className="text-[1.2rem] md:text-[1.5rem] lg:text-[2rem] p-1 font-mono font-black text-[#333]">
          اهلاً وسهلاً بكم في آمكو
        </h3>
      </div>
      <div className="w-full min-h-full">
        <Image
          src={"/images/saudi-man.jpg"}
          alt="hero-image"
          width={1000}
          height={1000}
          className="bg-cover"
          priority
        />
      </div>
    </div>
  );
};

export default LeftSection;
