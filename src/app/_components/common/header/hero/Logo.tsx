import React from "react";
import Image from "next/image";

interface LogoProps {
  src: string;
  className: string;
}

export const Logo: React.FC<LogoProps> = ({ className, src }) => {
  return (
    <div className="relative flex justify-center items-center">
      <div className={`absolute ${className}`}>
        <Image 
          src={src} 
          alt="لوجو شركة آمكو" 
          fill 
          className="w-full h-[100px] md:h-auto" 
          priority={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </div>
  );
};
