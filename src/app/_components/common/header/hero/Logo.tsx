import React from "react";
import Image from "next/image";

interface LogoProps {
  src: string;
  className: string;
}

export const Logo: React.FC<LogoProps> = ({ className, src }) => {
  return (
    <div className="relative">
      <div className={`absolute ${className}`}>
        <Image src={src} alt="logo" fill />
      </div>
    </div>
  );
};
