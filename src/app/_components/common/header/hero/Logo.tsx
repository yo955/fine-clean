import React from "react";
import Image from "next/image";

interface LogoProps {
  src: string;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className, src }) => {
  return (
    <div className={`relative  flex justify-center items-center w-full h-full ${className}`}>
      <Image
        src={src}
        alt="لوجو شركة آمكو"
        fill
        className="absolute object-cover z-50"
        priority
      />
    </div>
  );
};
