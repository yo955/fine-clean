import React from "react";
import { Logo } from "./Logo";
import { Text } from "./Text";

export const Hero = () => {
  return (
    <main className="flex flex-row w-full min-h-[100px] h-[100px] md:h-[180px]">
      {/* القسم البرتقالي */}
      <div className="basis-2/3  md:basis-2/3 bg-orange flex items-center justify-center p-0 md:p-2 h-full">
        <Text />
      </div>

      {/* قسم اللوجو - متجاوب */}
      <div className="basis-2/6  md:basis-1/4 flex items-center justify-center bg-white h-full overflow-visible relative z-10">
        <div className="w-full h-full flex items-center justify-center">
          <Logo
            src="/logo/logo.png"
            className="w-full h-full object-cover mt-2 max-w-[200px] max-h-[200px] md:max-w-full md:mt-4 md:max-h-[200px]"
          />
        </div>
      </div>

      {/* القسم الرمادي */}
      <div className="basis-1/12 md:basis-1/4 bg-orange p-2 md:p-4 h-full"></div>
    </main>
  );
};