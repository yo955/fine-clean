import React from "react";

interface TextProps {
  className?: string;
}

export const Text: React.FC<TextProps> = ({ className = "" }) => {
  return (
    <div className={`${className}`}>
      <div className="flex flex-col items-center text-center h-full space-y-2">
        {/* الشعار: عربي + إنجليزي */}
        <div className="flex items-center gap-4">
          <h1 className="text-[1.7rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3.7rem] text-primary font-bold tracking-wide lg:tracking-[0.08rem]">
            آمـ<span className="text-white">گــ</span>و
          </h1>
          <h1 className="text-[1.7rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3.7rem] text-primary tracking-[0.2rem] md:tracking-[0.5rem] lg:tracking-[0.7rem] font-semibold">
            AM<span className="text-white">C</span>O
          </h1>
        </div>

      
      </div>
    </div>
  );
};
