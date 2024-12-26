import React from "react";

interface TextProps {
  className: string;
}
export const Text: React.FC<TextProps> = ({ className }) => {
  return (
    <div className={`${className}`}>
      <div className="text flex justify-around items-center h-full">
        <div className="arabic max-h-fit ">
          <h1 className="text-[100%] sm:text-[2rem] md:text-[2.5rem] lg:text-[3.7rem] text-primary font-bold tracking-wide lg:tracking-[0.08rem]">
            اســــا<span className="text-white">د</span>كــــو
          </h1>
        </div>
        <div className="english">
          <h1 className="text-[100%] sm:text-[2rem] md:text-[2.5rem] lg:text-[3.7rem] text-primary tracking-[0.2rem] md:tracking-[0.5rem] lg:tracking-[0.7rem]">
            ASA<span className="text-white">D</span>CO
          </h1>
        </div>
      </div>
    </div>
  );
};
