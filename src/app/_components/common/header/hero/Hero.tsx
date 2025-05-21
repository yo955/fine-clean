import React from "react";
import { Logo } from "./Logo";
import { Text } from "./Text";

export const Hero = () => {
  return (
    <main className="flex flex-row w-full min-h-[120px] h-[100px] md:h-[180px]">
      {/* القسم البرتقالي */}
      <div className="basis-2/3  md:basis-2/3 bg-orange flex items-center justify-center p-0 md:p-4 h-full">
        <Text />
      </div>

      {/* قسم اللوجو - متجاوب */}
      <div className="basis-2/6  md:basis-1/4 flex items-center justify-center bg-white h-full overflow-visible relative z-10">
        <div className="w-full h-full flex items-center justify-center">
          <Logo
            src="/logo/logo.png"
            className="w-full h-full object-cover max-w-[180px] max-h-[180px] md:max-w-[90%] md:max-h-[200px]"
          />
        </div>
      </div>

      {/* القسم الرمادي */}
      <div className="basis-1/12  md:basis-1/4 bg-primary p-2 md:p-4 h-full"></div>
    </main>
  );
};