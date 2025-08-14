import React from "react";
import { Noto_Kufi_Arabic } from "next/font/google";

const kufi = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  weight: ["400", "700"],
  display: "swap",
});

interface TextProps {
  className?: string;
}

export const Text: React.FC<TextProps> = ({ className = "" }) => {
  return (
    <div className={`${kufi.className} ${className}`}>
      <div className="flex flex-col items-center text-center h-full space-y-2">
        {/* النص العربي بالخط الذهبي */}
        <h1 className="text-[1.7rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3.7rem] text-yellow-400 font-bold tracking-wide">
          شركة فاين كلين
        </h1>

        {/* النص الإنجليزي */}
        <p className="text-sm sm:text-base text-white font-medium">
          Fine Clean Company
        </p>
      </div>
    </div>
  );
};